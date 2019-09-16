package com.eeit109team6.servletmember;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.eeit109team6.memberDao.IMemberDao;
import com.eeit109team6.memberDao.Member;
import com.eeit109team6.memberDao.MemberDaoFactoery;

@WebServlet("/Check_Repeat")
public class Check_Repeat extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		Member mem = new Member();
		String account = request.getParameter("account");
		IMemberDao MEMDaoF = null;
		Member m = new Member();
		m.setAccount(account);
		try {
			MEMDaoF = MemberDaoFactoery.createMember();
			MEMDaoF.createConn();
			String check_answ = Boolean.toString(MEMDaoF.checkAccount(m));
			PrintWriter out = response.getWriter();
			System.out.println(check_answ);
			out.write(check_answ);
			out.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {

			try {
				MEMDaoF.closeConn();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}
