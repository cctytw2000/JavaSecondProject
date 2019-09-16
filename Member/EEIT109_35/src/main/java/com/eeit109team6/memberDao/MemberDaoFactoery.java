package com.eeit109team6.memberDao;

import java.io.IOException;
import java.sql.SQLException;

public class MemberDaoFactoery {
	public static IMemberDao createMember() throws IOException, SQLException {

			IMemberDao MEMDao;
			MEMDao = new MemberDaoJdbcImpl();
			return MEMDao;


	}
}
