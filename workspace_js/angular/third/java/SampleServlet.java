import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SampleServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,
    IOException {
        PrintWriter out = response.getWriter();
        out.println("[{\"empId\":1, \"empName\":\"Scott\", \"salary\":4000}, {\"empId\":2, \"empName\":\"Allen\", \"salary\":7500}]");
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,
    IOException {
        String a = request.getParameter("empId");
        String b = request.getParameter("empName");
        String c = request.getParameter("salary");
        
        PrintWriter out = response.getWriter();
        out.println("Successfully Inserted");
    }    

    public void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException,
    IOException {
        String a = request.getParameter("empId");
        String b = request.getParameter("empName");
        String c = request.getParameter("salary");
        
        PrintWriter out = response.getWriter();
        out.println("Successfully Updated");
    } 

    public void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException,
    IOException {
        String a = request.getParameter("empId");
        
        PrintWriter out = response.getWriter();
        out.println("Successfully Deleted");
    } 
}
