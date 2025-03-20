import React from "react";

export default function Footer(){
  return(
<footer style = {{
  display: "flex",
  justifyContent: "space-between",
}}>
  <div style={{
    marginLeft: "10px"
  }}>
    <a href={"https://github.com/Chsa13/maxwell-distribution"}>Репозиторий проекта</a>
  </div>
    <div className="footer-content">
        <p>© 2025 Чернов Семён <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>.</p>
        <ul className="social-links">
          <p style={{
            paddingLeft: "10px"
          }}>Контакты: </p>
            <li style={{
              marginLeft: "5px"
            }}><a href="https://t.me/chsa13" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            <p>,</p>
            <li style={{
              marginLeft: "5px",
              marginRight: "10px"
            }}><a href="https://github.com/Chsa13" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
    </div>
</footer>
  )
}