package pack;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.relevantcodes.extentreports.LogStatus;

import oracle.jdbc.OracleTypes;

public class AA_Holidays extends AA_ILP{
	static ArrayList<String> dates=new ArrayList<String>();
	public static void holidays() throws ClassNotFoundException, SQLException {
		Connection conn = null;

		// Object of Statement. It is used to create a Statement to execute the
		// query
		Statement stmt = null;

		// Object of ResultSet => 'It maintains a cursor that points to the
		// current row in the result set'
		ResultSet resultSet = null;

		Class.forName("oracle.jdbc.driver.OracleDriver");
		System.out.println("before conn");
		// Open a connection
		try {

			conn = DriverManager.getConnection("jdbc:oracle:thin:@192.168.2.242:1521:QFUNDUAT2", prop.getProperty("db_username"),
					prop.getProperty("db_username"));

		} catch (SQLException e1) {

			System.out.println("Connection Failed! Check output console" + e1);
			e1.printStackTrace();
		}

		// Execute a query
		stmt = conn.createStatement();
		System.out.println("after conn");
		try {
		
			
			resultSet = stmt.executeQuery("select Holiday_date from LT_CA_bank_holidays where IS_BANK_HOLIDAY='Y'");

			 while (resultSet .next())
			{
				System.out.println(
						resultSet .getString(1).substring(0,10) 
									  //resultSet.getString(2) + "  " +
									 // resultSet.getString(3) + "  " +
									 // resultSet.getString(4) + "  " +
									  //resultSet.getString(5)
									 );
				
				dates.add(resultSet .getString(1).substring(0,10)  );
				
				
			}
			 Date date1=new SimpleDateFormat("dd/MM/yyyy").parse(Due_Date);
			 if(dates.contains(Due_Date))
					//System.out.println("FAIL->Due Date doent fall on the Bank Holidays");
			 test.log(LogStatus.FAIL, "FAIL->Due Date doent fall on the Bank Holidays");
			
			  else if(date1.getDay()==0&&date1.getDay()==7)
				 //System.out.println("FAIL->Due Date doent fall on the Sunday/Saturday");
			 test.log(LogStatus.FAIL, "FAIL->Due Date doent fall on the Sunday/Saturday");
			 else
				// System.out.println("Due Date doesnt fall on the Holidays");
			 test.log(LogStatus.PASS, "Due Date doesnt fall on the Holidays");
			 
			 
			
			System.out.println("after query");
			test.log(LogStatus.PASS, "Proceduer run successfully");

			if (resultSet != null) {
				try {
					resultSet.close();
				} catch (Exception e) {
				}
			}

			if (stmt != null) {
				try {
					stmt.close();
				} catch (Exception e) {
				}
			}

			if (conn != null) {
				try {
					conn.close();
				} catch (Exception e) {
				}
			}
		} catch (Exception e2) {

			System.out.println(" console" + e2);
			e2.printStackTrace();
		}

	}

}
