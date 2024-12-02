function Contact () {
    return (
      <section id="contact">
        <div class="container">
          <h2>Contact Me</h2>
          <p>
            If you'd like to get in touch, feel free to email me at: {""}
            <a href="mailto:your.email@example.com">
              aidana.abdilkyzy@icloud.com
            </a>
          </p>
        </div>

        <div class="social-links">
          <a
            href="https://www.linkedin.com/in/aidanaabdilkyzy"
            target="_blank"
            class="social-icon"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/AidanaAbdil"
            target="_blank"
            class="social-icon"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/aboutaidana"
            target="_blank"
            class="social-icon instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </section>
    );
}

export default Contact;