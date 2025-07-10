## Static resume website hosted on AWS using S3, CloudFront, Route 53, and ACM.

---

## 📌 What the Project Does
This is a static S3 portfolio website that hosts my professional resume. It demonstrates how I used AWS services to deliver a secure and fast site with a custom domain.

---

## 🛠 Tech Stack / AWS Services Used
- **Frontend:** HTML, CSS, JavaScript
- **AWS Services:**  
  - S3 (Static Website Hosting)  
  - Route 53 (DNS & Domain Management)  
  - ACM (SSL Certificate Management)  
  - CloudFront (Content Delivery)  

---

## 🧱 Architecture Diagram
![AWS Resume Website Architecture](awsResumeSiteDiagram.png)

---

## ⚙️ Deployment Process
1. Wrote HTML, CSS, and JS using VS Code  
2. Uploaded code to an S3 bucket with public read access  
3. Registered a domain and pointed Route 53 A Record to the S3 website  
4. Generated an SSL certificate with ACM  
5. Connected CloudFront to S3 using the ACM certificate for HTTPS  
6. Updated Route 53 to point to the CloudFront distribution

---

## 🌐 Live Website  
[https://danzellaws.com](https://danzellaws.com)
