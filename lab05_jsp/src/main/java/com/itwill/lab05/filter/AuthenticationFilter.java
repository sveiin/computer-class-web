package com.itwill.lab05.filter;

import jakarta.servlet.http.HttpFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.net.URLEncoder;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;

/**
 * Servlet Filter implementation class AuthenticationFilter
 */
public class AuthenticationFilter extends HttpFilter {
    private static final long serialVersionUID = 1L;
    private static final Logger log = LoggerFactory.getLogger(AuthenticationFilter.class);

    /**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// 필터 객체가 소멸될 때 WAS가 호출하는 메서드
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) 
	        throws IOException, ServletException {
		// 인증이 필요한 요청 주소들(예: 새 글, 상세보기, ...)에 대해서
	    // 로그인 여부를 확인하고,
	    // (1) 로그인되어 있으면, 컨트롤러로 요청을 전달해서 계속 요청을 처리
	    // (2) 로그인되어 있지 않으면, 컨트롤러로 요청을 전달하지 않고 로그인 페이지로 이동
	    // -> 로그인 컨트롤러(UserSignInController)에서 로그인 성공 후 최초 요청 주소로 이동

	    HttpServletRequest req = ((HttpServletRequest) request);
	    
	    String reqUrl = req.getRequestURL().toString();
	    log.debug("request URL = {}", reqUrl);
	    
	    String contextPath = req.getContextPath();
	    log.debug("context path(root) = {}", contextPath);
	    
	    String reqUri = req.getRequestURI();
	    log.debug("request URI = {}", reqUri);
	    
	    String qs = req.getQueryString();
	    log.debug("query string = {}", qs);
	    
	    String target = ""; // 로그인 성공했을 때 이동(redirect)할 요청 주소
	    if (qs == null) {
	        target = URLEncoder.encode(reqUrl, "UTF-8");
	    } else {
	        target = URLEncoder.encode(reqUrl + "?" + qs, "UTF-8");
	    }
	    log.debug("target = {}", target);
	    
	    // 세션에 로그인 정보(signedInUser)가 있는 지를 체크:
		HttpSession session = req.getSession();
		Object signedInUser = session.getAttribute("signedInUser");
		if (signedInUser == null) { // 로그인 안 된 상태
		    log.debug("로그아웃 상태 --> 로그인 페이지로 이동 --> 로그인 성공 후 target으로 이동");
		    
		    String url = req.getContextPath() + "/user/signin?target=" + target;
		    ((HttpServletResponse) response).sendRedirect(url);
		    
		} else { // 로그인 상태
		    log.debug("로그인 상태: {}", signedInUser);
		    
		    // 요청을 계속 처리(-> 요청을 처리하는 서블릿으로 전달)
		    chain.doFilter(request, response);
		}
		
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// WAS가 필터 객체를 생성한 후 호출
	}

}