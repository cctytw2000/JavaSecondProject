package com.eeit109team6.servletmember;

import java.io.IOException;
import java.security.SecureRandom;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;

import javax.annotation.Resource;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import com.eeit109team6.memberDao.IMemberDao;
import com.eeit109team6.memberDao.Member;
import com.eeit109team6.memberDao.MemberDaoFactoery;


@WebServlet("/FerGetPWD")
public class FerGetPWD extends HttpServlet {
	private static final long serialVersionUID = 1L;

       




	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");


		String account = request.getParameter("account");


		Member mem = new Member();
		KeyGenerator keyGen;
		try {
			keyGen = KeyGenerator.getInstance("AES");
			keyGen.init(256, new SecureRandom());
			SecretKey secretKey = keyGen.generateKey();
			byte[] iv = new byte[16];
			SecureRandom prng = new SecureRandom();
			prng.nextBytes(iv);
			Long math =  Long.valueOf((long) (Math.random()*999999999));
			String token_notformat = AES_CBC_PKCS5PADDING.Encrypt(secretKey, iv, math.toString());
			String token = token_notformat.replaceAll("[\\pP\\p{Punct}]","").replace(" ", "");

			mem.setAccount(account);
			mem.setToken(token);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		

		IMemberDao MEMDao = null;
		
		
		
		
		try {
			MEMDao = MemberDaoFactoery.createMember();
			MEMDao.createConn();
			MEMDao.forgetPwd(mem);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			try {
				MEMDao.closeConn();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		

		
		
		
		  String host = "smtp.gmail.com";
		  int port = 587;
		  final String Email = "cctytw2000@gmail.com";
		  final String EmailPwd = "jtes5505";//your password

		  Properties props = new Properties();
		  props.put("mail.smtp.host", host);
		  props.put("mail.smtp.auth", "true");
		  props.put("mail.smtp.starttls.enable", "true");
		  props.put("mail.smtp.port", port);
		  Session session = Session.getInstance(props, new Authenticator() {
		   protected PasswordAuthentication getPasswordAuthentication() {
		    return new PasswordAuthentication(Email, EmailPwd);
		   }
		  });

		  try {

		   Message message = new MimeMessage(session);
		   message.setFrom(new InternetAddress("cctytw2000@gmail.com"));
		   message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(account));
		   message.setSubject("忘記密碼");
		   message.setText("http://localhost:8090/EEIT109_35/member/forgetPWDInsertNewPassowrd.jsp?account="+account+"&token="+mem.getToken());
		   
		   Transport transport = session.getTransport("smtp");
		   transport.connect(host, port, Email, EmailPwd);

		   Transport.send(message);
		   
		   System.out.println("寄送email結束.");
		   response.getWriter().write("<script>alert('')</script>");

		   request.setAttribute("msg", "請至您的信箱點擊連結修改密碼");
		   RequestDispatcher rd = request.getRequestDispatcher("member/jump.jsp");
		   rd.forward(request, response);
		  } catch (MessagingException e) {
		   throw new RuntimeException(e);
		  }
		
		
		
//		RequestDispatcher rd = request.getRequestDispatcher("/html/forgetPWDInsertNewPassowrd.html");
//		rd.forward(request, response);
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
