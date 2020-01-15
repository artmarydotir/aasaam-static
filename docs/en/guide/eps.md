# Edge Proxy Server

## What is an Edge Proxy Server?

Edge Proxy Server (EPS) is a type of proxy server and traffic manager, which 
sits at the edge of the site's network and receives requests from clients then 
retrieves the corresponding resources from upstream servers. Since EPS is 
hot-plugged at the edge, it provides web application security that has become a 
central component of any web-based business.
Also, it empowers your infrastructure regarding DevOps, Security and Operations 
by means of Web Application Firewall (WAF), SSL offloading, cache server, 
protection against Denial of Service (DOS) and Distributed Denial of Service 
(DDOS), load balance, and lots of other opportunities:

This service consists of customized open-source packages and specific softwares
developed by aasaam software development group.

### Web Application Firewall (WAF)

This module is a layer 7 firewall which is able to monitor, filter, and block 
the cyberthreats and harmful traffic. The main cyberattacks which can be 
detected and prevented are:

  * SQL Injection  
  * XSS (Cross Site Scripting)  
  * File Inclusion  
  * Remote Code Execution   

There is a Learning mode in this module, which is helpful to enrich the rule 
base by inspecting the logs before deploying it on EPS. Learning mode is quite 
useful to reduce false positives.  

### Reverse Proxy

This module helps you to serve the web-servers and applications to the clients
through a secure cluster. Moreover, it provides central logging and integrated
monitoring.

### SSL Offloader

SSL offloading provides a centralized and secure SSL termination for all of the 
upstream servers. One of the most important advantages of this approach is that
SSL offloading eliminates the need for sharing private keys with all of the 
backend servers. Furthermore, it improves web server performance by eliminating
the need for encryption/decryption in backend servers.  

### Access Policy Manager

Access Policy Manager (APM) implements CDN authentication, in the other words it 
facilitates access to critical applications through CDN.  

### PageSpeed Accelerator

This component of our EPS optimizes loading of HTML pages of web servers or 
applications automatically, by conducting various procedures:   

  * **Image Optimization** through dynamic resizing, stripping meta-data, 
    and image recompression.

  * **Scripts Minification/Optimization** by minifying CSS & JavaScript codes, 
    concatenation, inlining and outlining.

  * **HTML Rewriting**  by organizing HTML scripts, minimizing payload size and 
    optimizing browser rendering.  

  * **Cache Lifetime Extension** by extending the lifetime for caches of the 
    contents which have been constant, it will boost the page speed without 
    compromising the ability of site owners to change the resources.  


### Compressor

To reduce the bandwidth, improving latency and optimizing the streaming of data 
in browsers, Brotli or Gzip compression algorithms are used by the compressor 
module. It minimizes bandwidth to less than half of the bandwidth normally used.   

### DOS and DDOS Protector

This module is designed to protect your infrastructure against DOS and DDOS 
attacks. It sends challenge–response tests (e.g., CAPTCHA) to the clients with
suspiciously high and abnormal requests to the CDN connected servers. Through an 
automatic and smart detection mechanism, it can recognize IPs with suspicious
activity and provides a security shield to block such harmful traffic.   

### Rate limiting module  

It controls the rate of traffic received by clients, by delaying the response 
to such users or blocking their request.   

### Load balancer

This module empowers you to balance the load of traffic on various web servers 
or applications through Active/Passive, Round-Robin or Service Discovery 
approaches.

### IP Restrict Access

This module enables you to prevent access from CDNs outside of the country, and
can be customized to place countries either in blacklist or whitelist.   

### Cache Server

According to the standards of web and transferring protocols, this module not 
only caches the static contents but also can smartly cache the contents of 
applications or web servers. It will significantly improve the performance of
your application by caching the resources of particular requests in cache server
hence for the upcoming identical requests backend servers will not be forced to
response. It will boost the speed of those applications and web servers that are
used by lots of guest users.   

### Client-Side Error Reporting 

By employing this module, the errors produced on client side such as syntax 
errors or JavaScript errors will be monitored and categorized by browser type.
Hence, the developers of backend servers will be able to monitor the client
experiences regarding their application interface and improve their application.
Moreover, this module can monitor the certificate of web servers and the 
feedback of various browsers and operating systems.    



 














