export const templates = {
    "blog": {
        "id1": {
            name: "Minal Blog ",
            component: `
      <header>
          <div class="container">
              <div class="header-content">
                  <a href="#" class="logo">Minimal</a>
                  <nav>
                      <ul>
                          <li><a href="#home">Home</a></li>
                          <li><a href="#about">About</a></li>
                          <li><a href="#contact">Contact</a></li>
                      </ul>
                  </nav>
              </div>
          </div>
      </header>

      <main>
          <div class="container">
              <section class="hero">
                  <h1>Simple Stories</h1>
                  <p>A minimal blog focused on clean design, thoughtful writing, and meaningful conversations about life, technology, and everything in between.</p>
              </section>

              <section class="posts">
                  <article class="post">
                      <div class="post-meta">
                          <span class="post-date">March 15, 2024</span>
                          <span class="post-category">Design</span>
                      </div>
                      <h2>The Beauty of Minimalism</h2>
                      <p class="post-excerpt">
                          In a world filled with noise and complexity, there's something profoundly calming about embracing simplicity. Minimalism isn't just about having fewer things—it's about making room for what truly matters.
                      </p>
                      <a href="#" class="read-more">Read more →</a>
                  </article>

                  <article class="post">
                      <div class="post-meta">
                          <span class="post-date">March 10, 2024</span>
                          <span class="post-category">Technology</span>
                      </div>
                      <h2>Building Better Web Experiences</h2>
                      <p class="post-excerpt">
                          The web has evolved dramatically over the past decade, but the fundamentals of good design remain unchanged. Speed, accessibility, and user experience should always come first.
                      </p>
                      <a href="#" class="read-more">Read more →</a>
                  </article>

                  <article class="post">
                      <div class="post-meta">
                          <span class="post-date">March 5, 2024</span>
                          <span class="post-category">Life</span>
                      </div>
                      <h2>Finding Focus in a Distracted World</h2>
                      <p class="post-excerpt">
                          Our attention is constantly being pulled in different directions. Learning to focus deeply on the things that matter most has become one of the most valuable skills we can develop.
                      </p>
                      <a href="#" class="read-more">Read more →</a>
                  </article>

                  <article class="post">
                      <div class="post-meta">
                          <span class="post-date">February 28, 2024</span>
                          <span class="post-category">Productivity</span>
                      </div>
                      <h2>The Power of Daily Routines</h2>
                      <p class="post-excerpt">
                          Small, consistent actions compound over time to create remarkable results. The secret isn't in grand gestures, but in the habits we build day by day.
                      </p>
                      <a href="#" class="read-more">Read more →</a>
                  </article>
              </section>
          </div>
      </main>

      <footer>
          <div class="container">
              <div class="footer-content">
                  <div class="logo">Minimal</div>
                  <div class="social-links">
                      <a href="#">Twitter</a>
                      <a href="#">GitHub</a>
                      <a href="#">LinkedIn</a>
                  </div>
              </div>
              <div class="copyright">
                  © 2024 Minimal Blog. All rights reserved.
              </div>
          </div>
      </footer>
    `,
            style: `
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }

      body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #fafafa;
      }

      .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
      }

      header {
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 100;
      }

      .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
      }

      .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c3e50;
          text-decoration: none;
      }

      nav ul {
          display: flex;
          list-style: none;
          gap: 2rem;
      }

      nav a {
          text-decoration: none;
          color: #666;
          font-weight: 500;
          transition: color 0.3s ease;
      }

      nav a:hover {
          color: #2c3e50;
      }

      main {
          padding: 3rem 0;
      }

      .hero {
          text-align: center;
          margin-bottom: 4rem;
      }

      .hero h1 {
          font-size: 3rem;
          font-weight: 300;
          color: #2c3e50;
          margin-bottom: 1rem;
      }

      .hero p {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
      }

      .posts {
          display: grid;
          gap: 3rem;
      }

      .post {
          background: white;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .post:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.15);
      }

      .post-meta {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          color: #888;
      }

      .post-date {
          background: #e8f4f8;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          color: #2c3e50;
      }

      .post-category {
          background: #f0f8e8;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          color: #27ae60;
      }

      .post h2 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #2c3e50;
          font-weight: 600;
      }

      .post-excerpt {
          color: #666;
          line-height: 1.7;
          margin-bottom: 1.5rem;
      }

      .read-more {
          display: inline-block;
          color: #3498db;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 2px solid transparent;
          transition: border-color 0.3s ease;
      }

      .read-more:hover {
          border-bottom-color: #3498db;
      }

      footer {
          background: #2c3e50;
          color: white;
          text-align: center;
          padding: 3rem 0;
          margin-top: 4rem;
      }

      .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
      }

      .social-links {
          display: flex;
          gap: 1rem;
      }

      .social-links a {
          color: white;
          text-decoration: none;
          padding: 0.5rem;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          transition: background 0.3s ease;
      }

      .social-links a:hover {
          background: rgba(255,255,255,0.2);
      }

      .copyright {
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          color: #bdc3c7;
      }

      @media (max-width: 768px) {
          .header-content {
              flex-direction: column;
              gap: 1rem;
          }

          nav ul {
              gap: 1rem;
          }

          .hero h1 {
              font-size: 2rem;
          }

          .hero p {
              font-size: 1rem;
          }

          .post {
              padding: 1.5rem;
          }

          .footer-content {
              flex-direction: column;
              gap: 1rem;
          }
      }
    `
        },
        "id2": {
            name: "Tech Blog",
            component: `
             <header>
        <div class="container">
            <div class="header-content">
                <a href="#" class="logo">TechFlow</a>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#articles">Articles</a></li>
                        <li><a href="#tutorials">Tutorials</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <div class="container">
            <!-- Hero Section -->
            <section class="hero">
                <div class="hero-content">
                    <h1>Tech Insights & Innovation</h1>
                    <p>Exploring the latest in technology, development, and digital transformation. Stay ahead with cutting-edge insights and practical tutorials.</p>
                </div>
            </section>

            <!-- Featured Articles Carousel -->
            <section class="featured-section">
                <h2 class="section-title">Featured Articles</h2>
                <div class="carousel-container">
                    <div class="carousel" id="carousel">
                        <div class="carousel-slide">
                            <div class="featured-meta">
                                <span class="featured-tag">AI & ML</span>
                                <span class="featured-date">December 15, 2024</span>
                            </div>
                            <h3 class="featured-title">The Future of Large Language Models in 2025</h3>
                            <p class="featured-excerpt">
                                Explore the latest developments in LLMs, from improved reasoning capabilities to multimodal understanding. We dive deep into what's coming next and how it will transform industries.
                            </p>
                            <a href="#" class="featured-link">Read Full Article →</a>
                        </div>
                        <div class="carousel-slide">
                            <div class="featured-meta">
                                <span class="featured-tag">Web Development</span>
                                <span class="featured-date">December 12, 2024</span>
                            </div>
                            <h3 class="featured-title">Modern React Patterns: Server Components Deep Dive</h3>
                            <p class="featured-excerpt">
                                Master the latest React Server Components with practical examples and performance insights. Learn how to build faster, more efficient React applications.
                            </p>
                            <a href="#" class="featured-link">Read Full Article →</a>
                        </div>
                        <div class="carousel-slide">
                            <div class="featured-meta">
                                <span class="featured-tag">DevOps</span>
                                <span class="featured-date">December 8, 2024</span>
                            </div>
                            <h3 class="featured-title">Kubernetes Security Best Practices for 2025</h3>
                            <p class="featured-excerpt">
                                Comprehensive guide to securing your Kubernetes clusters. From RBAC to network policies, learn the essential security measures every DevOps engineer should know.
                            </p>
                            <a href="#" class="featured-link">Read Full Article →</a>
                        </div>
                    </div>
                    <div class="carousel-nav">
                        <div class="carousel-dot active" onclick="showSlide(0)"></div>
                        <div class="carousel-dot" onclick="showSlide(1)"></div>
                        <div class="carousel-dot" onclick="showSlide(2)"></div>
                    </div>
                </div>
            </section>

            <!-- Recent Posts Grid -->
            <section class="recent-posts">
                <h2 class="section-title">Latest Articles</h2>
                <div class="posts-grid">
                    <article class="post-card">
                        <div class="post-meta">
                            <span class="post-category">JavaScript</span>
                            <span class="post-date">Dec 10, 2024</span>
                        </div>
                        <h3 class="post-title">Advanced TypeScript Patterns for Better Code</h3>
                        <p class="post-excerpt">
                            Discover powerful TypeScript patterns that will make your code more maintainable and type-safe. From conditional types to template literals.
                        </p>
                        <a href="#" class="read-more">Read more →</a>
                    </article>

                    <article class="post-card">
                        <div class="post-meta">
                            <span class="post-category">Cloud Computing</span>
                            <span class="post-date">Dec 8, 2024</span>
                        </div>
                        <h3 class="post-title">Serverless Architecture: When and Why</h3>
                        <p class="post-excerpt">
                            Understanding when serverless makes sense for your application. We explore the pros, cons, and real-world use cases.
                        </p>
                        <a href="#" class="read-more">Read more →</a>
                    </article>

                    <article class="post-card">
                        <div class="post-meta">
                            <span class="post-category">Performance</span>
                            <span class="post-date">Dec 5, 2024</span>
                        </div>
                        <h3 class="post-title">Web Performance Optimization in 2025</h3>
                        <p class="post-excerpt">
                            Latest techniques for building blazing-fast web applications. Core Web Vitals, lazy loading, and modern optimization strategies.
                        </p>
                        <a href="#" class="read-more">Read more →</a>
                    </article>

                    <article class="post-card">
                        <div class="post-meta">
                            <span class="post-category">Security</span>
                            <span class="post-date">Dec 3, 2024</span>
                        </div>
                        <h3 class="post-title">Zero-Trust Architecture Implementation</h3>
                        <p class="post-excerpt">
                            Step-by-step guide to implementing zero-trust security principles in modern applications and infrastructure.
                        </p>
                        <a href="#" class="read-more">Read more →</a>
                    </article>

                    <article class="post-card">
                        <div class="post-meta">
                            <span class="post-category">Database</span>
                            <span class="post-date">Nov 30, 2024</span>
                        </div>
                        <h3 class="post-title">Vector Databases for AI Applications</h3>
                        <p class="post-excerpt">
                            Exploring vector databases and their role in AI applications. From embeddings to similarity search and RAG implementations.
                        </p>
                        <a href="#" class="read-more">Read more →</a>
                    </article>

                    <article class="post-card">
                        <div class="post-meta">
                            <span class="post-category">Mobile Dev</span>
                            <span class="post-date">Nov 28, 2024</span>
                        </div>
                        <h3 class="post-title">React Native vs Flutter in 2025</h3>
                        <p class="post-excerpt">
                            Comprehensive comparison of the two leading cross-platform frameworks. Performance, ecosystem, and development experience.
                        </p>
                        <a href="#" class="read-more">Read more →</a>
                    </article>
                </div>
            </section>

            <!-- Author Bio -->
            <section class="author-bio">
                <div class="author-content">
                    <div class="author-avatar">AJ</div>
                    <div class="author-info">
                        <h3>Alex Johnson</h3>
                        <div class="author-title">Senior Full-Stack Developer & Tech Writer</div>
                        <p class="author-description">
                            With over 8 years of experience in web development and cloud architecture, Alex shares insights on modern development practices, emerging technologies, and practical tutorials. Passionate about making complex technical concepts accessible to developers at all levels.
                        </p>
                        <div class="author-links">
                            <a href="#" class="author-link">Twitter</a>
                            <a href="#" class="author-link">GitHub</a>
                            <a href="#" class="author-link">LinkedIn</a>
                            <a href="#" class="author-link">Medium</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>TechFlow</h4>
                    <p>Your go-to source for modern technology insights, tutorials, and industry trends. Stay ahead in the fast-evolving tech landscape.</p>
                </div>
                <div class="footer-section">
                    <h4>Categories</h4>
                    <p><a href="#">Web Development</a></p>
                    <p><a href="#">AI & Machine Learning</a></p>
                    <p><a href="#">Cloud Computing</a></p>
                    <p><a href="#">DevOps</a></p>
                </div>
                <div class="footer-section">
                    <h4>Resources</h4>
                    <p><a href="#">Tutorials</a></p>
                    <p><a href="#">Code Examples</a></p>
                    <p><a href="#">Best Practices</a></p>
                    <p><a href="#">Tools & Resources</a></p>
                </div>
                <div class="footer-section">
                    <h4>Connect</h4>
                    <p><a href="#">Newsletter</a></p>
                    <p><a href="#">RSS Feed</a></p>
                    <p><a href="#">Contact</a></p>
                    <p><a href="#">About</a></p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 TechFlow. All rights reserved. Built with passion for technology.</p>
            </div>
        </div>
          </footer>`,
            style: `* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #e0e0e0;
            background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            background: rgba(20, 20, 20, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid #333;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: #00d4ff;
            text-decoration: none;
            background: linear-gradient(45deg, #00d4ff, #0099cc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        nav a {
            text-decoration: none;
            color: #b0b0b0;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }

        nav a:hover {
            color: #00d4ff;
        }

        nav a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(45deg, #00d4ff, #0099cc);
            transition: width 0.3s ease;
        }

        nav a:hover::after {
            width: 100%;
        }

        /* Hero Section */
        .hero {
            text-align: center;
            padding: 4rem 0;
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            margin-bottom: 3rem;
            border-radius: 20px;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
            opacity: 0.5;
        }

        .hero-content {
            position: relative;
            z-index: 1;
        }

        .hero h1 {
            font-size: 3.5rem;
            font-weight: 300;
            color: #ffffff;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #ffffff, #00d4ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero p {
            font-size: 1.3rem;
            color: #b0b0b0;
            max-width: 600px;
            margin: 0 auto;
        }

        /* Featured Carousel */
        .featured-section {
            margin-bottom: 4rem;
        }

        .section-title {
            font-size: 2rem;
            color: #ffffff;
            margin-bottom: 2rem;
            text-align: center;
            font-weight: 600;
        }

        .carousel-container {
            position: relative;
            overflow: hidden;
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0, 212, 255, 0.2);
        }

        .carousel {
            display: flex;
            transition: transform 0.5s ease;
        }

        .carousel-slide {
            min-width: 100%;
            background: linear-gradient(135deg, #2d2d2d 0%, #3d3d3d 100%);
            padding: 3rem;
            position: relative;
            overflow: hidden;
        }

        .carousel-slide::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(45deg, #00d4ff, #0099cc);
        }

        .featured-meta {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .featured-tag {
            background: rgba(0, 212, 255, 0.2);
            color: #00d4ff;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
        }

        .featured-date {
            color: #888;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
        }

        .featured-title {
            font-size: 2.2rem;
            color: #ffffff;
            margin-bottom: 1rem;
            font-weight: 600;
        }

        .featured-excerpt {
            color: #b0b0b0;
            font-size: 1.1rem;
            line-height: 1.7;
            margin-bottom: 2rem;
        }

        .featured-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: #00d4ff;
            text-decoration: none;
            font-weight: 600;
            padding: 0.8rem 1.5rem;
            background: rgba(0, 212, 255, 0.1);
            border-radius: 25px;
            border: 1px solid rgba(0, 212, 255, 0.3);
            transition: all 0.3s ease;
        }

        .featured-link:hover {
            background: rgba(0, 212, 255, 0.2);
            transform: translateY(-2px);
        }

        .carousel-nav {
            position: absolute;
            bottom: 1rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 0.5rem;
        }

        .carousel-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .carousel-dot.active {
            background: #00d4ff;
            transform: scale(1.2);
        }

        /* Recent Posts Grid */
        .recent-posts {
            margin-bottom: 4rem;
        }

        .posts-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .post-card {
            background: linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%);
            border-radius: 15px;
            padding: 2rem;
            border: 1px solid #333;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .post-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(45deg, #00d4ff, #0099cc);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .post-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 212, 255, 0.3);
            border-color: #00d4ff;
        }

        .post-card:hover::before {
            transform: scaleX(1);
        }

        .post-meta {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
            font-size: 0.9rem;
        }

        .post-category {
            background: rgba(0, 153, 204, 0.2);
            color: #0099cc;
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            font-weight: 500;
        }

        .post-date {
            color: #888;
        }

        .post-title {
            font-size: 1.4rem;
            color: #ffffff;
            margin-bottom: 1rem;
            font-weight: 600;
            line-height: 1.3;
        }

        .post-excerpt {
            color: #b0b0b0;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }

        .read-more {
            color: #00d4ff;
            text-decoration: none;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
        }

        .read-more:hover {
            gap: 1rem;
        }

        /* Author Bio */
        .author-bio {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            border-radius: 20px;
            padding: 3rem;
            margin-bottom: 4rem;
            border: 1px solid #333;
            position: relative;
            overflow: hidden;
        }

        .author-bio::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(45deg, #00d4ff, #0099cc);
        }

        .author-content {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 2rem;
            align-items: center;
        }

        .author-avatar {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: linear-gradient(45deg, #00d4ff, #0099cc);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: white;
            font-weight: bold;
        }

        .author-info h3 {
            font-size: 1.8rem;
            color: #ffffff;
            margin-bottom: 0.5rem;
        }

        .author-title {
            color: #00d4ff;
            font-size: 1.1rem;
            margin-bottom: 1rem;
            font-weight: 500;
        }

        .author-description {
            color: #b0b0b0;
            line-height: 1.7;
            margin-bottom: 1.5rem;
        }

        .author-links {
            display: flex;
            gap: 1rem;
        }

        .author-link {
            color: #888;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            border: 1px solid #444;
            transition: all 0.3s ease;
        }

        .author-link:hover {
            color: #00d4ff;
            border-color: #00d4ff;
            background: rgba(0, 212, 255, 0.1);
        }

        /* Footer */
        footer {
            background: #0a0a0a;
            border-top: 1px solid #333;
            padding: 3rem 0;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .footer-section h4 {
            color: #ffffff;
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }

        .footer-section p,
        .footer-section a {
            color: #888;
            text-decoration: none;
            line-height: 1.8;
        }

        .footer-section a:hover {
            color: #00d4ff;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid #333;
            color: #666;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 1rem;
            }

            nav ul {
                gap: 1rem;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .hero p {
                font-size: 1.1rem;
            }

            .carousel-slide {
                padding: 2rem;
            }

            .featured-title {
                font-size: 1.8rem;
            }

            .posts-grid {
                grid-template-columns: 1fr;
            }

            .author-content {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .footer-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
        }`
        },
        "id3": {
            name: "LifeStyle Blog",
            component: `    <header>
        <div class="container">
            <div class="header-content">
                <a href="#" class="logo">LifeVibes</a>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#lifestyle">Lifestyle</a></li>
                        <li><a href="#fashion">Fashion</a></li>
                        <li><a href="#travel">Travel</a></li>
                        <li><a href="#wellness">Wellness</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
                <div class="search-bar">
                    <input type="text" placeholder="Search lifestyle tips...">
                    <span>🔍</span>
                </div>
            </div>
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <h1>Live Your Best Life</h1>
                <p>Discover inspiration for fashion, travel, wellness, and everything in between. Join our community of lifestyle enthusiasts.</p>
            </div>
        </section>

        <div class="container">
            <!-- Stories Section -->
            <section class="stories-section">
                <h2 class="stories-title">Daily Highlights</h2>
                <div class="stories-container">
                    <div class="story">
                        <div class="story-avatar">
                            <div class="story-image">☀️</div>
                        </div>
                        <div class="story-label">Morning</div>
                    </div>
                    <div class="story">
                        <div class="story-avatar">
                            <div class="story-image">👗</div>
                        </div>
                        <div class="story-label">OOTD</div>
                    </div>
                    <div class="story">
                        <div class="story-avatar">
                            <div class="story-image">🥗</div>
                        </div>
                        <div class="story-label">Healthy</div>
                    </div>
                    <div class="story">
                        <div class="story-avatar">
                            <div class="story-image">✈️</div>
                        </div>
                        <div class="story-label">Travel</div>
                    </div>
                    <div class="story">
                        <div class="story-avatar">
                            <div class="story-image">🧘</div>
                        </div>
                        <div class="story-label">Mindful</div>
                    </div>
                    <div class="story">
                        <div class="story-avatar">
                            <div class="story-image">🏠</div>
                        </div>
                        <div class="story-label">Home</div>
                    </div>
                    <div class="story">
                        <div class="story-avatar">
                            <div class="story-image">💄</div>
                        </div>
                        <div class="story-label">Beauty</div>
                    </div>
                    <div class="story">
                        <div class="story-avatar">
                            <div class="story-image">🌿</div>
                        </div>
                        <div class="story-label">Nature</div>
                    </div>
                </div>
            </section>

            <!-- Filter Section -->
            <section class="filter-section">
                <div class="filter-buttons">
                    <button class="filter-btn active">All</button>
                    <button class="filter-btn">Fashion</button>
                    <button class="filter-btn">Travel</button>
                    <button class="filter-btn">Wellness</button>
                    <button class="filter-btn">Home</button>
                    <button class="filter-btn">Beauty</button>
                </div>
            </section>

            <!-- Masonry Layout -->
            <section class="masonry-container">
                <article class="masonry-item">
                    <div class="post-image" style="background: linear-gradient(45deg, #ffeaa7, #fab1a0); height: 250px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">📸</div>
                    <div class="post-content">
                        <span class="post-category">Fashion</span>
                        <h3 class="post-title">10 Must-Have Spring Fashion Pieces</h3>
                        <p class="post-excerpt">Refresh your wardrobe with these essential spring pieces that will keep you stylish and comfortable all season long.</p>
                        <div class="post-meta">
                            <span class="post-date">📅 Dec 15, 2024</span>
                            <div class="post-engagement">
                                <span class="engagement-item">❤️ 124</span>
                                <span class="engagement-item">💬 18</span>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="masonry-item">
                    <div class="post-image" style="background: linear-gradient(45deg, #fd79a8, #e17055); height: 180px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">✈️</div>
                    <div class="post-content">
                        <span class="post-category">Travel</span>
                        <h3 class="post-title">Hidden Gems in Bali</h3>
                        <p class="post-excerpt">Discover secret spots away from the crowds that showcase the real beauty of Bali.</p>
                        <div class="post-meta">
                            <span class="post-date">📅 Dec 12, 2024</span>
                            <div class="post-engagement">
                                <span class="engagement-item">❤️ 89</span>
                                <span class="engagement-item">💬 12</span>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="masonry-item">
                    <div class="post-image" style="background: linear-gradient(45deg, #a29bfe, #6c5ce7); height: 320px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">🧘</div>
                    <div class="post-content">
                        <span class="post-category">Wellness</span>
                        <h3 class="post-title">Morning Meditation Routine</h3>
                        <p class="post-excerpt">Start your day with intention and mindfulness. Here's how to create a sustainable morning meditation practice that fits your lifestyle.</p>
                        <div class="post-meta">
                            <span class="post-date">📅 Dec 10, 2024</span>
                            <div class="post-engagement">
                                <span class="engagement-item">❤️ 156</span>
                                <span class="engagement-item">💬 23</span>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="masonry-item">
                    <div class="post-image" style="background: linear-gradient(45deg, #00b894, #00cec9); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">🏠</div>
                    <div class="post-content">
                        <span class="post-category">Home</span>
                        <h3 class="post-title">Cozy Home Decor Ideas</h3>
                        <p class="post-excerpt">Transform your space into a cozy sanctuary with these simple and affordable decorating tips.</p>
                        <div class="post-meta">
                            <span class="post-date">📅 Dec 8, 2024</span>
                            <div class="post-engagement">
                                <span class="engagement-item">❤️ 78</span>
                                <span class="engagement-item">💬 15</span>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="masonry-item">
                    <div class="post-image" style="background: linear-gradient(45deg, #ff7675, #fd79a8); height: 280px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">💄</div>
                    <div class="post-content">
                        <span class="post-category">Beauty</span>
                        <h3 class="post-title">5-Minute Natural Makeup Look</h3>
                        <p class="post-excerpt">Achieve a fresh, natural glow in just 5 minutes with these easy makeup tips perfect for busy mornings.</p>
                        <div class="post-meta">
                            <span class="post-date">📅 Dec 5, 2024</span>
                            <div class="post-engagement">
                                <span class="engagement-item">❤️ 203</span>
                                <span class="engagement-item">💬 31</span>
                            </div>
                        </div>
                    </div>
                </article>

                <article class="masonry-item">
                    <div class="post-image" style="background: linear-gradient(45deg, #fdcb6e, #e17055); height: 220px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">🥗</div>
                    <div class="post-content">
                        <span class="post-category">Wellness</span>
                        <h3 class="post-title">Healthy Meal Prep Ideas</h3>
                        <p class="post-excerpt">Make eating healthy easier with these delicious and nutritious meal prep recipes that save time and money.</p>
                        <div class="post-meta">
                            <span class="post-date">📅 Dec 3, 2024</span>
                            <div class="post-engagement">
                                <span class="engagement-item">❤️ 167</span>
                                <span class="engagement-item">💬 28</span>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            <!-- Instagram Feed Section -->
            <section class="instagram-section">
                <div class="instagram-header">
                    <h2 class="instagram-title">Follow Our Journey</h2>
                    <p class="instagram-subtitle">@lifevibes_official</p>
                </div>
                <div class="instagram-grid">
                    <div class="instagram-post">
                        <div class="instagram-image">🌅</div>
                        <div class="instagram-overlay">View Post</div>
                    </div>
                    <div class="instagram-post">
                        <div class="instagram-image">☕</div>
                        <div class="instagram-overlay">View Post</div>
                    </div>
                    <div class="instagram-post">
                        <div class="instagram-image">🌸</div>
                        <div class="instagram-overlay">View Post</div>
                    </div>
                    <div class="instagram-post">
                        <div class="instagram-image">👠</div>
                        <div class="instagram-overlay">View Post</div>
                    </div>
                    <div class="instagram-post">
                        <div class="instagram-image">🥑</div>
                        <div class="instagram-overlay">View Post</div>
                    </div>
                    <div class="instagram-post">
                        <div class="instagram-image">🌴</div>
                        <div class="instagram-overlay">View Post</div>
                    </div>
                </div>
            </section>
        </div>
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>LifeVibes</h4>
                    <p>Your daily dose of lifestyle inspiration. From fashion to wellness, we're here to help you live your best life.</p>
                </div>
                <div class="footer-section">
                    <h4>Categories</h4>
                    <p><a href="#">Fashion & Style</a></p>
                    <p><a href="#">Travel & Adventure</a></p>
                    <p><a href="#">Health & Wellness</a></p>
                    <p><a href="#">Home & Decor</a></p>
                </div>
                <div class="footer-section">
                    <h4>Connect</h4>
                    <p><a href="#">Newsletter</a></p>
                    <p><a href="#">Community</a></p>
                    <p><a href="#">Contact Us</a></p>
                </div>

              </div> 
              /<div>
              </footer> `,
            style: ` * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #fafafa;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            background: white;
            box-shadow: 0 2px 20px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }

        .logo {
            font-size: 2rem;
            font-weight: 700;
            background: linear-gradient(45deg, #ff6b6b, #ff8e8e, #ffa8a8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-decoration: none;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        nav a {
            text-decoration: none;
            color: #666;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }

        nav a:hover {
            color: #ff6b6b;
        }

        .search-bar {
            display: flex;
            align-items: center;
            background: #f8f8f8;
            border-radius: 25px;
            padding: 0.5rem 1rem;
            border: 2px solid transparent;
            transition: all 0.3s ease;
        }

        .search-bar:focus-within {
            border-color: #ff6b6b;
            background: white;
        }

        .search-bar input {
            border: none;
            background: none;
            outline: none;
            padding: 0.5rem;
            width: 200px;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 50%, #ffa8a8 100%);
            color: white;
            text-align: center;
            padding: 4rem 0;
            margin-bottom: 3rem;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E") repeat;
        }

        .hero-content {
            position: relative;
            z-index: 1;
        }

        .hero h1 {
            font-size: 3.5rem;
            font-weight: 300;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .hero p {
            font-size: 1.3rem;
            opacity: 0.9;
            max-width: 600px;
            margin: 0 auto;
        }

        /* Instagram-style Stories */
        .stories-section {
            margin-bottom: 3rem;
            background: white;
            padding: 2rem 0;
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .stories-title {
            text-align: center;
            font-size: 1.5rem;
            color: #333;
            margin-bottom: 2rem;
            font-weight: 600;
        }

        .stories-container {
            display: flex;
            gap: 1rem;
            overflow-x: auto;
            padding: 0 2rem;
            scrollbar-width: none;
            -ms-overflow-style: none;
        }

        .stories-container::-webkit-scrollbar {
            display: none;
        }

        .story {
            flex-shrink: 0;
            text-align: center;
            cursor: pointer;
        }

        .story-avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
            padding: 3px;
            margin-bottom: 0.5rem;
            transition: transform 0.3s ease;
        }

        .story-avatar:hover {
            transform: scale(1.1);
        }

        .story-image {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: linear-gradient(45deg, #ffeaa7, #fab1a0, #fd79a8, #e17055);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.2rem;
        }

        .story-label {
            font-size: 0.8rem;
            color: #666;
            font-weight: 500;
        }

        /* Masonry Layout */
        .masonry-container {
            columns: 3;
            column-gap: 2rem;
            margin-bottom: 3rem;
        }

        .masonry-item {
            break-inside: avoid;
            margin-bottom: 2rem;
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            position: relative;
        }

        .masonry-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }

        .post-image {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 15px 15px 0 0;
        }

        .post-content {
            padding: 1.5rem;
        }

        .post-category {
            display: inline-block;
            background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            font-size: 0.8rem;
            font-weight: 600;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .post-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 0.8rem;
            line-height: 1.3;
        }

        .post-excerpt {
            color: #666;
            line-height: 1.6;
            margin-bottom: 1rem;
            font-size: 0.95rem;
        }

        .post-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.85rem;
            color: #888;
            border-top: 1px solid #f0f0f0;
            padding-top: 1rem;
        }

        .post-date {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .post-engagement {
            display: flex;
            gap: 1rem;
        }

        .engagement-item {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            cursor: pointer;
            transition: color 0.3s ease;
        }

        .engagement-item:hover {
            color: #ff6b6b;
        }

        /* Instagram Feed Section */
        .instagram-section {
            background: white;
            border-radius: 20px;
            padding: 2rem;
            margin-bottom: 3rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .instagram-header {
            text-align: center;
            margin-bottom: 2rem;
        }

        .instagram-title {
            font-size: 1.8rem;
            color: #333;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        .instagram-subtitle {
            color: #666;
            font-size: 1rem;
        }

        .instagram-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
        }

        .instagram-post {
            position: relative;
            aspect-ratio: 1;
            border-radius: 10px;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.3s ease;
        }

        .instagram-post:hover {
            transform: scale(1.05);
        }

        .instagram-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            background: linear-gradient(45deg, #ffeaa7, #fab1a0, #fd79a8, #e17055);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
        }

        .instagram-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(255,107,107,0.8), rgba(255,142,142,0.8));
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }

        .instagram-post:hover .instagram-overlay {
            opacity: 1;
        }

        /* Categories Filter */
        .filter-section {
            text-align: center;
            margin-bottom: 3rem;
        }

        .filter-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .filter-btn {
            padding: 0.8rem 1.5rem;
            border: 2px solid #ff6b6b;
            background: white;
            color: #ff6b6b;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
        }

        .filter-btn.active,
        .filter-btn:hover {
            background: #ff6b6b;
            color: white;
            transform: translateY(-2px);
        }

        /* Footer */
        footer {
            background: linear-gradient(135deg, #2d3436 0%, #636e72 100%);
            color: white;
            padding: 3rem 0 2rem;
            text-align: center;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .footer-section h4 {
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }

        .footer-section p,
        .footer-section a {
            color: rgba(255,255,255,0.8);
            text-decoration: none;
            line-height: 1.8;
        }

        .footer-section a:hover {
            color: #ff6b6b;
        }

        .social-icons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
        }

        .social-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(255,255,255,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: white;
            transition: all 0.3s ease;
        }

        .social-icon:hover {
            background: #ff6b6b;
            transform: translateY(-3px);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .masonry-container {
                columns: 2;
            }
        }

        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 1rem;
            }

            .search-bar {
                order: 3;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .masonry-container {
                columns: 1;
            }

            .instagram-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            .filter-buttons {
                gap: 0.5rem;
            }

            .filter-btn {
                padding: 0.6rem 1rem;
                font-size: 0.9rem;
            }
        }

        /* Loading Animation */
        .loading {
            display: inline-block;
            width: 40px;
            height: 40px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #ff6b6b;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }`
        }
    }

    ,
    "ecommerce": {
        "id1": {
            name: "gadgetHub",
            component: `    <header>
        <nav class="container">
            <div class="logo">TechHub</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#deals">Deals</a></li>
                <li><a href="#compare">Compare</a></li>
            </ul>
        </nav>
    </header>

    <main class="container">
        <section class="hero" id="home">
            <h1>Premium Tech Gadgets</h1>
            <p>Discover the latest in cutting-edge technology and innovation</p>
        </section>

        <section class="deal-banner" id="deals">
            <h2>🔥 FLASH SALE - 50% OFF SELECTED ITEMS</h2>
            <p>Limited time offer! Don't miss out on these incredible deals</p>
            <div class="countdown">
                <div class="time-unit">
                    <span class="time-number">23</span>
                    <span class="time-label">Hours</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">45</span>
                    <span class="time-label">Minutes</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">12</span>
                    <span class="time-label">Seconds</span>
                </div>
            </div>
        </section>

        <section class="products" id="products">
            <h2 class="section-title">Featured Products</h2>
            <div class="product-grid">
                <div class="product-card">
                    <div class="product-image">📱</div>
                    <h3>Pro Max Smartphone</h3>
                    <div class="product-price">$899</div>
                    <ul class="product-features">
                        <li>6.7" OLED Display</li>
                        <li>256GB Storage</li>
                        <li>Triple Camera System</li>
                        <li>5G Ready</li>
                    </ul>
                    <a href="#" class="btn">Buy Now</a>
                </div>

                <div class="product-card">
                    <div class="product-image">💻</div>
                    <h3>Ultra Gaming Laptop</h3>
                    <div class="product-price">$1,299</div>
                    <ul class="product-features">
                        <li>RTX 4070 Graphics</li>
                        <li>16GB RAM</li>
                        <li>1TB SSD</li>
                        <li>144Hz Display</li>
                    </ul>
                    <a href="#" class="btn">Buy Now</a>
                </div>

                <div class="product-card">
                    <div class="product-image">🎧</div>
                    <h3>Wireless Headphones</h3>
                    <div class="product-price">$249</div>
                    <ul class="product-features">
                        <li>Active Noise Cancelling</li>
                        <li>30-hour Battery</li>
                        <li>Hi-Res Audio</li>
                        <li>Quick Charge</li>
                    </ul>
                    <a href="#" class="btn">Buy Now</a>
                </div>
            </div>
        </section>

        <section class="comparison" id="compare">
            <h2>Product Comparison</h2>
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Pro Max Phone</th>
                        <th>Gaming Laptop</th>
                        <th>Wireless Headphones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Wireless</strong></td>
                        <td><span class="check">✓</span></td>
                        <td><span class="check">✓</span></td>
                        <td><span class="check">✓</span></td>
                    </tr>
                    <tr>
                        <td><strong>Fast Charging</strong></td>
                        <td><span class="check">✓</span></td>
                        <td><span class="check">✓</span></td>
                        <td><span class="check">✓</span></td>
                    </tr>
                    <tr>
                        <td><strong>Gaming Ready</strong></td>
                        <td><span class="check">✓</span></td>
                        <td><span class="check">✓</span></td>
                        <td><span class="cross">✗</span></td>
                    </tr>
                    <tr>
                        <td><strong>Portable</strong></td>
                        <td><span class="check">✓</span></td>
                        <td><span class="cross">✗</span></td>
                        <td><span class="check">✓</span></td>
                    </tr>
                    <tr>
                        <td><strong>Professional Use</strong></td>
                        <td><span class="check">✓</span></td>
                        <td><span class="check">✓</span></td>
                        <td><span class="check">✓</span></td>
                    </tr>
                    <tr>
                        <td><strong>Price Range</strong></td>
                        <td>$$</td>
                        <td>$$$</td>
                        <td>$</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2025 TechHub. All rights reserved. | Premium gadgets for tech enthusiasts</p>
        </div>
    </footer>`,
            styles: `        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
            color: #e0e6ed;
            line-height: 1.6;
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            padding: 1rem 0;
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
            border-bottom: 2px solid #00d4ff;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: #00d4ff;
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            color: #e0e6ed;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a:hover {
            color: #00d4ff;
            text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #00d4ff, #ff0080);
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* Hero Section */
        .hero {
            text-align: center;
            padding: 4rem 0;
            background: radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #00d4ff, #ff0080, #00ff88);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
            from { filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.5)); }
            to { filter: drop-shadow(0 0 30px rgba(255, 0, 128, 0.5)); }
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        /* Deal Timer */
        .deal-banner {
            background: linear-gradient(135deg, #ff0080, #ff4040);
            padding: 2rem;
            margin: 2rem 0;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(255, 0, 128, 0.3);
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }

        .deal-banner h2 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }

        .countdown {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1rem;
        }

        .time-unit {
            background: rgba(0, 0, 0, 0.3);
            padding: 1rem;
            border-radius: 10px;
            min-width: 80px;
        }

        .time-number {
            font-size: 2rem;
            font-weight: bold;
            display: block;
            animation: countdown-tick 1s infinite;
        }

        @keyframes countdown-tick {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0.7; }
        }

        .time-label {
            font-size: 0.9rem;
            opacity: 0.8;
        }

        /* Product Grid */
        .products {
            padding: 3rem 0;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #00d4ff;
        }

        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .product-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            position: relative;
            overflow: hidden;
        }

        .product-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: conic-gradient(transparent, rgba(0, 212, 255, 0.1), transparent 30%);
            animation: rotate 4s linear infinite;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .product-card:hover::before {
            opacity: 1;
        }

        @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .product-card:hover {
            transform: translateY(-10px);
            border-color: #00d4ff;
            box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
        }

        .product-image {
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #00d4ff, #ff0080);
            border-radius: 15px;
            margin: 0 auto 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            position: relative;
            z-index: 1;
        }

        .product-card h3 {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
            color: #00d4ff;
            position: relative;
            z-index: 1;
        }

        .product-price {
            font-size: 1.5rem;
            font-weight: bold;
            color: #00ff88;
            margin: 1rem 0;
            position: relative;
            z-index: 1;
        }

        .product-features {
            list-style: none;
            margin: 1rem 0;
            position: relative;
            z-index: 1;
        }

        .product-features li {
            padding: 0.3rem 0;
            opacity: 0.8;
        }

        .btn {
            background: linear-gradient(135deg, #00d4ff, #0099cc);
            color: white;
            border: none;
            padding: 0.8rem 2rem;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
            position: relative;
            z-index: 1;
            text-decoration: none;
            display: inline-block;
        }

        .btn:hover {
            background: linear-gradient(135deg, #ff0080, #ff4040);
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
        }

        /* Comparison Table */
        .comparison {
            background: rgba(255, 255, 255, 0.02);
            border-radius: 15px;
            padding: 2rem;
            margin: 3rem 0;
            border: 1px solid rgba(0, 212, 255, 0.1);
        }

        .comparison h2 {
            text-align: center;
            margin-bottom: 2rem;
            color: #00d4ff;
        }

        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }

        .comparison-table th,
        .comparison-table td {
            padding: 1rem;
            text-align: center;
            border-bottom: 1px solid rgba(0, 212, 255, 0.1);
        }

        .comparison-table th {
            background: linear-gradient(135deg, #00d4ff, #0099cc);
            color: white;
            font-weight: bold;
        }

        .comparison-table tr:hover {
            background: rgba(0, 212, 255, 0.1);
        }

        .check {
            color: #00ff88;
            font-size: 1.2rem;
        }

        .cross {
            color: #ff4040;
            font-size: 1.2rem;
        }

        /* Footer */
        footer {
            background: rgba(0, 0, 0, 0.3);
            padding: 2rem 0;
            margin-top: 3rem;
            border-top: 1px solid rgba(0, 212, 255, 0.2);
            text-align: center;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            
            .countdown {
                gap: 1rem;
            }
            
            .time-unit {
                min-width: 60px;
                padding: 0.5rem;
            }
            
            .nav-links {
                gap: 1rem;
            }
            
            .comparison-table {
                font-size: 0.9rem;
            }
        }`
        },
        "id2": {
            name: "gadgetHub",
            component: `<header>
        <nav>
            <div class="logo">LUXE</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#collections">Collections</a></li>
                <li><a href="#lookbook">Lookbook</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="nav-icons">
                <a href="#">👤</a>
                <a href="#">❤️</a>
                <a href="#">🛍️</a>
            </div>
        </nav>
    </header>

    <!-- Hero Slider -->
    <section class="hero-slider" id="home">
        <div class="slide slide-1 active">
            <div class="slide-content">
                <h1>SPRING COLLECTION</h1>
                <p>Discover the latest trends in fashion</p>
                <a href="#collections" class="cta-button">SHOP NOW</a>
            </div>
        </div>
        <div class="slide slide-2">
            <div class="slide-content">
                <h1>SUMMER ESSENTIALS</h1>
                <p>Lightweight elegance for warm days</p>
                <a href="#collections" class="cta-button">EXPLORE</a>
            </div>
        </div>
        <div class="slide slide-3">
            <div class="slide-content">
                <h1>AUTUMN ELEGANCE</h1>
                <p>Sophisticated styles for the season</p>
                <a href="#collections" class="cta-button">DISCOVER</a>
            </div>
        </div>
        <div class="slider-nav">
            <div class="nav-dot active" onclick="currentSlide(1)"></div>
            <div class="nav-dot" onclick="currentSlide(2)"></div>
            <div class="nav-dot" onclick="currentSlide(3)"></div>
        </div>
    </section>

    <!-- Category Section -->
    <section class="category-section" id="lookbook">
        <div class="container">
            <h2 class="section-title">LOOKBOOK</h2>
            
            <div class="filter-tabs">
                <button class="filter-tab active" onclick="filterItems('all')">ALL</button>
                <button class="filter-tab" onclick="filterItems('dresses')">DRESSES</button>
                <button class="filter-tab" onclick="filterItems('tops')">TOPS</button>
                <button class="filter-tab" onclick="filterItems('outerwear')">OUTERWEAR</button>
                <button class="filter-tab" onclick="filterItems('bottoms')">BOTTOMS</button>
            </div>

            <div class="lookbook-grid">
                <div class="lookbook-item dresses" data-category="dresses">
                    <div class="lookbook-image item-1"></div>
                    <div class="lookbook-overlay">
                        <div class="lookbook-info">
                            <h3>Silk Midi Dress</h3>
                            <p>$299</p>
                        </div>
                    </div>
                </div>

                <div class="lookbook-item tops" data-category="tops">
                    <div class="lookbook-image item-2"></div>
                    <div class="lookbook-overlay">
                        <div class="lookbook-info">
                            <h3>Satin Blouse</h3>
                            <p>$159</p>
                        </div>
                    </div>
                </div>

                <div class="lookbook-item outerwear" data-category="outerwear">
                    <div class="lookbook-image item-3"></div>
                    <div class="lookbook-overlay">
                        <div class="lookbook-info">
                            <h3>Wool Blazer</h3>
                            <p>$449</p>
                        </div>
                    </div>
                </div>

                <div class="lookbook-item bottoms" data-category="bottoms">
                    <div class="lookbook-image item-4"></div>
                    <div class="lookbook-overlay">
                        <div class="lookbook-info">
                            <h3>Tailored Trousers</h3>
                            <p>$199</p>
                        </div>
                    </div>
                </div>

                <div class="lookbook-item bottoms" data-category="bottoms">
                    <div class="lookbook-image item-5"></div>
                    <div class="lookbook-overlay">
                        <div class="lookbook-info">
                            <h3>Pleated Skirt</h3>
                            <p>$179</p>
                        </div>
                    </div>
                </div>

                <div class="lookbook-item tops" data-category="tops">
                    <div class="lookbook-image item-6"></div>
                    <div class="lookbook-overlay">
                        <div class="lookbook-info">
                            <h3>Cashmere Top</h3>
                            <p>$229</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Full-width Collection Slider -->
    <section class="collection-slider" id="collections">
        <div class="collection-slide active">
            <div class="collection-content">
                <h2>SEASONAL EDIT</h2>
                <p>Curated pieces that define the season. From flowing fabrics to structured silhouettes, each piece tells a story of contemporary elegance and timeless sophistication.</p>
                <a href="#" class="cta-button">VIEW COLLECTION</a>
            </div>
            <div class="collection-visual">
                COLLECTION IMAGE
            </div>
        </div>
        
        <div class="collection-slide">
            <div class="collection-content">
                <h2>CAPSULE WARDROBE</h2>
                <p>Essential pieces designed to mix, match, and transcend seasons. Minimalist luxury meets maximum versatility in this carefully selected collection.</p>
                <a href="#" class="cta-button">SHOP ESSENTIALS</a>
            </div>
            <div class="collection-visual">
                ESSENTIALS IMAGE
            </div>
        </div>
        
        <div class="collection-slide">
            <div class="collection-content">
                <h2>EVENING ELEGANCE</h2>
                <p>Sophisticated pieces for special occasions. Luxurious fabrics and impeccable tailoring create unforgettable moments of refined glamour.</p>
                <a href="#" class="cta-button">EXPLORE EVENING</a>
            </div>
            <div class="collection-visual">
                EVENING IMAGE
            </div>
        </div>

        <div class="collection-nav">
            <div class="collection-dot active" onclick="currentCollection(1)"></div>
            <div class="collection-dot" onclick="currentCollection(2)"></div>
            <div class="collection-dot" onclick="currentCollection(3)"></div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter">
        <div class="container">
            <h2>STAY IN STYLE</h2>
            <p>Subscribe to receive the latest fashion updates and exclusive offers</p>
            <form class="newsletter-form">
                <input type="email" class="newsletter-input" placeholder="Enter your email">
                <button type="submit" class="newsletter-button">SUBSCRIBE</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>CUSTOMER CARE</h3>
                    <ul>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">Shipping & Returns</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>COMPANY</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Sustainability</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>CONNECT</h3>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Pinterest</a></li>
                        <li><a href="#">Newsletter</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>LEGAL</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 LUXE. All rights reserved. | Premium fashion for the modern woman</p>
            </div>
        </div>
    </footer>`,
            styles: `        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background: #f8f8f8;
            color: #333;
            line-height: 1.6;
            overflow-x: hidden;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
        }

        .logo {
            font-size: 2rem;
            font-weight: 300;
            letter-spacing: 3px;
            color: #000;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 3rem;
        }

        .nav-links a {
            color: #333;
            text-decoration: none;
            font-weight: 300;
            letter-spacing: 1px;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 1px;
            background: #000;
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .nav-icons {
            display: flex;
            gap: 1.5rem;
            font-size: 1.2rem;
        }

        .nav-icons a {
            color: #333;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .nav-icons a:hover {
            color: #c9a96e;
        }

        /* Hero Slider */
        .hero-slider {
            height: 100vh;
            position: relative;
            overflow: hidden;
            margin-top: 80px;
        }

        .slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 2s ease-in-out;
        }

        .slide.active {
            opacity: 1;
            animation: slideIn 2s ease-in-out;
        }

        @keyframes slideIn {
            0% { transform: scale(1.1); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }

        .slide-1 {
            background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
                        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23c9a96e" width="1200" height="800"/><text x="600" y="400" text-anchor="middle" font-size="48" fill="white" font-family="serif">SPRING COLLECTION</text></svg>');
        }

        .slide-2 {
            background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
                        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23d4a574" width="1200" height="800"/><text x="600" y="400" text-anchor="middle" font-size="48" fill="white" font-family="serif">SUMMER ESSENTIALS</text></svg>');
        }

        .slide-3 {
            background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
                        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23b8956a" width="1200" height="800"/><text x="600" y="400" text-anchor="middle" font-size="48" fill="white" font-family="serif">AUTUMN ELEGANCE</text></svg>');
        }

        .slide-content {
            text-align: center;
            color: white;
            z-index: 2;
        }

        .slide-content h1 {
            font-size: 4rem;
            font-weight: 100;
            letter-spacing: 8px;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }

        .slide-content p {
            font-size: 1.3rem;
            font-weight: 300;
            letter-spacing: 2px;
            margin-bottom: 2rem;
        }

        .cta-button {
            display: inline-block;
            padding: 15px 40px;
            background: transparent;
            border: 2px solid white;
            color: white;
            text-decoration: none;
            font-weight: 300;
            letter-spacing: 2px;
            transition: all 0.3s ease;
        }

        .cta-button:hover {
            background: white;
            color: #333;
            transform: translateY(-2px);
        }

        /* Slider Navigation */
        .slider-nav {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 15px;
        }

        .nav-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .nav-dot.active {
            background: white;
            transform: scale(1.2);
        }

        /* Category Filters */
        .category-section {
            padding: 5rem 0;
            background: white;
        }

        .section-title {
            text-align: center;
            font-size: 3rem;
            font-weight: 100;
            letter-spacing: 3px;
            margin-bottom: 3rem;
            color: #333;
        }

        .filter-tabs {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-bottom: 4rem;
            flex-wrap: wrap;
        }

        .filter-tab {
            padding: 10px 0;
            background: none;
            border: none;
            font-size: 1.1rem;
            color: #666;
            cursor: pointer;
            letter-spacing: 1px;
            transition: all 0.3s ease;
            position: relative;
        }

        .filter-tab.active {
            color: #c9a96e;
            font-weight: 500;
        }

        .filter-tab::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: #c9a96e;
            transition: width 0.3s ease;
        }

        .filter-tab.active::after {
            width: 100%;
        }

        /* Lookbook Grid */
        .lookbook-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .lookbook-item {
            position: relative;
            overflow: hidden;
            aspect-ratio: 3/4;
            background: #f5f5f5;
            cursor: pointer;
            transition: all 0.5s ease;
        }

        .lookbook-item:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .lookbook-image {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            transition: transform 0.5s ease;
        }

        .lookbook-item:hover .lookbook-image {
            transform: scale(1.05);
        }

        .lookbook-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.8));
            opacity: 0;
            transition: opacity 0.3s ease;
            display: flex;
            align-items: flex-end;
            padding: 2rem;
        }

        .lookbook-item:hover .lookbook-overlay {
            opacity: 1;
        }

        .lookbook-info {
            color: white;
        }

        .lookbook-info h3 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: 0.5rem;
        }

        .lookbook-info p {
            font-size: 1.1rem;
            font-weight: 600;
            color: #c9a96e;
        }

        /* Sample lookbook items */
        .item-1 { background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect fill="%23e8ddd4" width="300" height="400"/><text x="150" y="200" text-anchor="middle" font-size="16" fill="%23666">DRESS</text></svg>'); }
        .item-2 { background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect fill="%23d4c5b9" width="300" height="400"/><text x="150" y="200" text-anchor="middle" font-size="16" fill="%23666">BLOUSE</text></svg>'); }
        .item-3 { background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect fill="%23c9a96e" width="300" height="400"/><text x="150" y="200" text-anchor="middle" font-size="16" fill="white">JACKET</text></svg>'); }
        .item-4 { background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect fill="%23b8956a" width="300" height="400"/><text x="150" y="200" text-anchor="middle" font-size="16" fill="white">PANTS</text></svg>'); }
        .item-5 { background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect fill="%23a68b5b" width="300" height="400"/><text x="150" y="200" text-anchor="middle" font-size="16" fill="white">SKIRT</text></svg>'); }
        .item-6 { background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect fill="%23f0e6d2" width="300" height="400"/><text x="150" y="200" text-anchor="middle" font-size="16" fill="%23666">TOP</text></svg>'); }

        /* Full-width Collection Slider */
        .collection-slider {
            background: #000;
            color: white;
            padding: 0;
            margin: 5rem 0;
            position: relative;
            overflow: hidden;
        }

        .collection-slide {
            display: none;
            min-height: 60vh;
            position: relative;
        }

        .collection-slide.active {
            display: flex;
            align-items: center;
            animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
        }

        .collection-content {
            flex: 1;
            padding: 4rem;
            z-index: 2;
        }

        .collection-content h2 {
            font-size: 3.5rem;
            font-weight: 100;
            letter-spacing: 4px;
            margin-bottom: 1rem;
        }

        .collection-content p {
            font-size: 1.2rem;
            line-height: 1.8;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .collection-visual {
            flex: 1;
            background: #c9a96e;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
            min-height: 400px;
        }

        /* Collection navigation */
        .collection-nav {
            position: absolute;
            bottom: 20px;
            right: 20px;
            display: flex;
            gap: 10px;
        }

        .collection-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .collection-dot.active {
            background: white;
            transform: scale(1.5);
        }

        /* Newsletter */
        .newsletter {
            background: #f8f8f8;
            padding: 5rem 0;
            text-align: center;
        }

        .newsletter h2 {
            font-size: 2.5rem;
            font-weight: 100;
            letter-spacing: 2px;
            margin-bottom: 1rem;
        }

        .newsletter p {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 2rem;
        }

        .newsletter-form {
            display: flex;
            justify-content: center;
            gap: 0;
            max-width: 400px;
            margin: 0 auto;
        }

        .newsletter-input {
            flex: 1;
            padding: 15px 20px;
            border: 1px solid #ddd;
            border-right: none;
            font-size: 1rem;
            outline: none;
        }

        .newsletter-button {
            padding: 15px 30px;
            background: #000;
            color: white;
            border: 1px solid #000;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .newsletter-button:hover {
            background: #c9a96e;
            border-color: #c9a96e;
        }

        /* Footer */
        footer {
            background: #000;
            color: white;
            padding: 3rem 0 1rem;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            margin-bottom: 2rem;
        }

        .footer-section h3 {
            font-size: 1.2rem;
            font-weight: 300;
            letter-spacing: 1px;
            margin-bottom: 1rem;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section ul li {
            margin-bottom: 0.5rem;
        }

        .footer-section ul li a {
            color: #ccc;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-section ul li a:hover {
            color: #c9a96e;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid #333;
            color: #666;
            font-size: 0.9rem;
        }

        /* Hidden class for filtering */
        .hidden {
            display: none !important;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .slide-content h1 {
                font-size: 2.5rem;
                letter-spacing: 4px;
            }
            
            .nav-links {
                display: none;
            }
            
            .lookbook-grid {
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
            }
            
            .collection-slide {
                flex-direction: column;
            }
            
            .collection-content {
                padding: 2rem;
            }
            
            .collection-content h2 {
                font-size: 2.5rem;
            }
            
            .newsletter-form {
                flex-direction: column;
                gap: 10px;
            }
            
            .newsletter-input {
                border-right: 1px solid #ddd;
            }
        }`
        },
        "id3": {
            name: 'handmade Crafts ',
            component: ` <header>
        <nav class="container">
            <div class="logo">Artisan's Corner</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#maker">Meet the Maker</a></li>
                <li><a href="#process">Our Process</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero" id="home">
        <div class="hero-content container">
            <h1>Handcrafted with Love</h1>
            <p>Unique, authentic pieces made by skilled artisans using traditional techniques</p>
            <a href="#products" class="cta-button">Shop Our Collection</a>
        </div>
    </section>

    <section class="featured-products" id="products">
        <div class="container">
            <h2 class="section-title">Featured Handmade Goods</h2>
            <div class="products-grid">
                <div class="product-card">
                    <div class="product-image">🏺</div>
                    <div class="product-info">
                        <h3>Ceramic Vase Collection</h3>
                        <div class="product-price">$89.99</div>
                        <p>Hand-thrown ceramic vases with unique glazes. Each piece is one-of-a-kind, fired in our traditional kiln.</p>
                        <button class="product-button">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">🧺</div>
                    <div class="product-info">
                        <h3>Woven Baskets</h3>
                        <div class="product-price">$45.99</div>
                        <p>Natural fiber baskets woven using traditional techniques passed down through generations.</p>
                        <button class="product-button">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">🕯️</div>
                    <div class="product-info">
                        <h3>Soy Candles</h3>
                        <div class="product-price">$24.99</div>
                        <p>Hand-poured soy candles with natural fragrances. Made with organic cotton wicks and essential oils.</p>
                        <button class="product-button">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">🪵</div>
                    <div class="product-info">
                        <h3>Wooden Bowls</h3>
                        <div class="product-price">$67.99</div>
                        <p>Handcrafted wooden bowls made from sustainably sourced hardwood. Perfect for serving or display.</p>
                        <button class="product-button">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">🧶</div>
                    <div class="product-info">
                        <h3>Knitted Scarves</h3>
                        <div class="product-price">$39.99</div>
                        <p>Cozy hand-knitted scarves made from organic wool. Each scarf features unique patterns and colors.</p>
                        <button class="product-button">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">🖼️</div>
                    <div class="product-info">
                        <h3>Handmade Frames</h3>
                        <div class="product-price">$52.99</div>
                        <p>Rustic picture frames crafted from reclaimed wood. Each frame tells its own story through weathered textures.</p>
                        <button class="product-button">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="meet-maker" id="maker">
        <div class="container">
            <div class="maker-content">
                <div class="maker-image">👩‍🎨</div>
                <div class="maker-info">
                    <h2>Meet Sarah</h2>
                    <h3>Master Artisan & Founder</h3>
                    <p>Hello! I'm Sarah, the heart and hands behind Artisan's Corner. My journey into crafting began over 15 years ago when I discovered the meditative joy of working with clay in my grandmother's studio.</p>
                    
                    <p>What started as a weekend hobby has blossomed into a passionate pursuit of creating beautiful, functional art pieces that bring warmth and character to homes around the world.</p>
                    
                    <p>Every piece I create is infused with love, attention to detail, and a deep respect for traditional crafting techniques. I believe that handmade goods carry a special energy that mass-produced items simply cannot match.</p>
                    
                    <div class="maker-stats">
                        <div class="stat-item">
                            <span class="stat-number">15+</span>
                            <span class="stat-label">Years Experience</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">500+</span>
                            <span class="stat-label">Happy Customers</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">1000+</span>
                            <span class="stat-label">Pieces Created</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`,
            styles: `  * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Georgia', 'Times New Roman', serif;
            background: #f5f1e8;
            color: #3a3a3a;
            line-height: 1.7;
            background-image: 
                radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.03) 0%, transparent 50%);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Rustic Textures */
        .wood-texture {
            background: 
                linear-gradient(90deg, transparent 76%, rgba(139, 69, 19, 0.04) 77%, rgba(139, 69, 19, 0.04) 78%, transparent 79%),
                linear-gradient(0deg, transparent 76%, rgba(139, 69, 19, 0.04) 77%, rgba(139, 69, 19, 0.04) 78%, transparent 79%),
                #d2b48c;
        }

        .linen-texture {
            background: 
                repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(139, 69, 19, 0.02) 2px, rgba(139, 69, 19, 0.02) 4px),
                repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(160, 82, 45, 0.02) 2px, rgba(160, 82, 45, 0.02) 4px),
                #f5f1e8;
        }

        /* Header */
        header {
            background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
            color: #f5f1e8;
            padding: 1rem 0;
            box-shadow: 0 4px 20px rgba(139, 69, 19, 0.3);
            position: relative;
        }

        header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(245, 241, 232, 0.05) 1px, rgba(245, 241, 232, 0.05) 2px);
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            z-index: 2;
        }

        .logo {
            font-size: 2.2rem;
            font-weight: bold;
            color: #f5f1e8;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            font-family: 'Georgia', serif;
        }

        .logo::before {
            content: '🏺 ';
            font-size: 1.8rem;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2.5rem;
        }

        .nav-links a {
            color: #f5f1e8;
            text-decoration: none;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            position: relative;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: #daa520;
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .nav-links a:hover {
            color: #daa520;
        }

        /* Hero Section */
        .hero {
            background: 
                linear-gradient(rgba(139, 69, 19, 0.1), rgba(160, 82, 45, 0.1)),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23d2b48c" width="1200" height="600"/><circle cx="200" cy="150" r="20" fill="%23a0522d" opacity="0.1"/><circle cx="800" cy="300" r="30" fill="%238b4513" opacity="0.1"/><circle cx="1000" cy="100" r="15" fill="%23daa520" opacity="0.1"/><text x="600" y="320" text-anchor="middle" font-size="48" fill="%23654321" font-family="Georgia">Handcrafted with Love</text></svg>');
            background-size: cover;
            background-position: center;
            padding: 8rem 0;
            text-align: center;
            position: relative;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                repeating-linear-gradient(45deg, transparent 0px, transparent 2px, rgba(139, 69, 19, 0.02) 2px, rgba(139, 69, 19, 0.02) 4px);
        }

        .hero-content {
            position: relative;
            z-index: 2;
        }

        .hero h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
            color: #654321;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
            font-family: 'Georgia', serif;
        }

        .hero p {
            font-size: 1.4rem;
            margin-bottom: 2rem;
            color: #8b4513;
            font-style: italic;
        }

        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #8b4513, #a0522d);
            color: #f5f1e8;
            padding: 1rem 2.5rem;
            text-decoration: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: bold;
            transition: all 0.3s ease;
            box-shadow: 0 6px 20px rgba(139, 69, 19, 0.3);
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(139, 69, 19, 0.4);
            background: linear-gradient(135deg, #a0522d, #8b4513);
        }

        /* Featured Products */
        .featured-products {
            padding: 5rem 0;
            background: #f5f1e8;
        }

        .section-title {
            text-align: center;
            font-size: 3rem;
            margin-bottom: 3rem;
            color: #654321;
            font-family: 'Georgia', serif;
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 3px;
            background: linear-gradient(90deg, #8b4513, #daa520, #8b4513);
            border-radius: 2px;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
            margin-top: 4rem;
        }

        .product-card {
            background: #fff;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(139, 69, 19, 0.1);
            transition: all 0.3s ease;
            position: relative;
        }

        .product-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                repeating-linear-gradient(45deg, transparent 0px, transparent 1px, rgba(139, 69, 19, 0.01) 1px, rgba(139, 69, 19, 0.01) 2px);
            pointer-events: none;
        }

        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(139, 69, 19, 0.2);
        }

        .product-image {
            height: 250px;
            background: linear-gradient(135deg, #d2b48c, #daa520);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: #654321;
            position: relative;
            overflow: hidden;
        }

        .product-image::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 30% 30%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(218, 165, 32, 0.1) 0%, transparent 50%);
        }

        .product-info {
            padding: 2rem;
            position: relative;
            z-index: 2;
        }

        .product-info h3 {
            font-size: 1.5rem;
            color: #654321;
            margin-bottom: 0.5rem;
            font-family: 'Georgia', serif;
        }

        .product-price {
            font-size: 1.3rem;
            color: #8b4513;
            font-weight: bold;
            margin-bottom: 1rem;
        }

        .product-info p {
            color: #666;
            margin-bottom: 1.5rem;
            line-height: 1.6;
        }

        .product-button {
            background: linear-gradient(135deg, #daa520, #b8860b);
            color: #fff;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }

        .product-button:hover {
            background: linear-gradient(135deg, #b8860b, #daa520);
            transform: scale(1.05);
        }

        /* Meet the Maker Section */
        .meet-maker {
            padding: 6rem 0;
            background: 
                linear-gradient(135deg, rgba(139, 69, 19, 0.05) 0%, rgba(160, 82, 45, 0.05) 100%),
                #f5f1e8;
            position: relative;
        }

        .meet-maker::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                repeating-linear-gradient(0deg, transparent 0px, transparent 20px, rgba(139, 69, 19, 0.01) 20px, rgba(139, 69, 19, 0.01) 21px);
        }

        .maker-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 4rem;
            align-items: center;
            position: relative;
            z-index: 2;
        }

        .maker-image {
            width: 100%;
            height: 400px;
            background: linear-gradient(135deg, #d2b48c, #daa520);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 5rem;
            color: #654321;
            box-shadow: 0 15px 40px rgba(139, 69, 19, 0.2);
            position: relative;
            overflow: hidden;
        }

        .maker-image::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                radial-gradient(circle at 40% 40%, rgba(139, 69, 19, 0.1) 0%, transparent 60%),
                radial-gradient(circle at 80% 20%, rgba(218, 165, 32, 0.1) 0%, transparent 60%);
        }

        .maker-info h2 {
            font-size: 3rem;
            color: #654321;
            margin-bottom: 1rem;
            font-family: 'Georgia', serif;
        }

        .maker-info h3 {
            font-size: 1.3rem;
            color: #8b4513;
            margin-bottom: 2rem;
            font-style: italic;
        }

        .maker-info p {
            font-size: 1.1rem;
            color: #555;
            margin-bottom: 1.5rem;
            line-height: 1.8;
        }

        .maker-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin-top: 3rem;
        }

        .stat-item {
            text-align: center;
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.7);
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(139, 69, 19, 0.1);
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            color: #8b4513;
            display: block;
        }

        .stat-label {
            color: #666;
            font-size: 1rem;
            margin-top: 0.5rem;
        }

        /* Crafting Process */
        .crafting-process {
            padding: 5rem 0;
            background: #fff;
        }

        .process-steps {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            margin-top: 4rem;
        }

        .process-step {
            text-align: center;
            padding: 2rem;
            background: 
                linear-gradient(135deg, rgba(139, 69, 19, 0.02) 0%, rgba(160, 82, 45, 0.02) 100%),
                #f5f1e8;
            border-radius: 20px;
            position: relative;
            transition: all 0.3s ease;
        }

        .process-step::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                repeating-linear-gradient(45deg, transparent 0px, transparent 1px, rgba(139, 69, 19, 0.01) 1px, rgba(139, 69, 19, 0.01) 2px);
            border-radius: 20px;
        }

        .process-step:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(139, 69, 19, 0.1);
        }

        .step-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
            display: block;
        }

        .step-number {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #8b4513, #a0522d);
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            font-weight: bold;
            font-size: 1.2rem;
        }

        .process-step h3 {
            color: #654321;
            margin-bottom: 1rem;
            font-family: 'Georgia', serif;
        }

        .process-step p {
            color: #666;
            line-height: 1.6;
        }

        /* Testimonials */
        .testimonials {
            padding: 5rem 0;
            background: 
                linear-gradient(135deg, rgba(139, 69, 19, 0.03) 0%, rgba(160, 82, 45, 0.03) 100%),
                #f5f1e8;
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
            margin-top: 4rem;
        }

        .testimonial-card {
            background: #fff;
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(139, 69, 19, 0.1);
            position: relative;
            transition: all 0.3s ease;
        }

        .testimonial-card::before {
            content: '"';
            position: absolute;
            top: -10px;
            left: 20px;
            font-size: 4rem;
            color: #daa520;
            font-family: 'Georgia', serif;
        }

        .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(139, 69, 19, 0.15);
        }

        .testimonial-text {
            font-style: italic;
            color: #555;
            margin-bottom: 1.5rem;
            line-height: 1.7;
        }

        .testimonial-author {
            font-weight: bold;
            color: #8b4513;
        }

        .testimonial-location {
            color: #999;
            font-size: 0.9rem;
        }

        /* Newsletter */
        .newsletter {
            padding: 4rem 0;
            background: linear-gradient(135deg, #8b4513, #a0522d);
            color: #f5f1e8;
            text-align: center;
        }

        .newsletter h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-family: 'Georgia', serif;
        }

        .newsletter p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        .newsletter-form {
            display: flex;
            justify-content: center;
            gap: 0;
            max-width: 400px;
            margin: 0 auto;
            border-radius: 50px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .newsletter-input {
            flex: 1;
            padding: 1rem 1.5rem;
            border: none;
            font-size: 1rem;
            outline: none;
            background: #f5f1e8;
            color: #333;
        }

        .newsletter-button {
            padding: 1rem 2rem;
            background: #daa520;
            color: #fff;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            transition: all 0.3s ease;
        }

        .newsletter-button:hover {
            background: #b8860b;
        }

        /* Footer */
        footer {
            background: #654321;
            color: #f5f1e8;
            padding: 3rem 0 1rem;
            position: relative;
        }

        footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(245, 241, 232, 0.02) 2px, rgba(245, 241, 232, 0.02) 4px);
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            margin-bottom: 2rem;
            position: relative;
            z-index: 2;
        }

        .footer-section h3 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: #daa520;
            font-family: 'Georgia', serif;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section ul li {
            margin-bottom: 0.7rem;
        }

        .footer-section ul li a {
            color: #f5f1e8;
            text-decoration: none;
            transition: color 0.3s ease;
            opacity: 0.8;
        }

        .footer-section ul li a:hover {
            color: #daa520;
            opacity: 1;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(218, 165, 32, 0.3);
            color: rgba(245, 241, 232, 0.7);
            position: relative;
            z-index: 2;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .nav-links {
                display: none;
            }
            
            .maker-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
            
            .maker-stats {
                grid-template-columns: 1fr;
            }
            
            .newsletter-form {
                flex-direction: column;
                border-radius: 10px;
            }
            
            .newsletter-input {
                border-radius: 10px 10px 0 0;
            }
            
            .newsletter-button {
                border-radius: 0 0 10px 10px;
            }
        }`
        }
    }
    ,
    "portfolio": {
        "id1": {
            name: 'SoundWave Studio - Premium Music Production',
            component: ` <header>
        <nav class="container">
            <div class="logo">Artisan's Corner</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#maker">Meet the Maker</a></li>
                <li><a href="#process">Our Process</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero" id="home">
        <div class="hero-content container">
            <h1>Handcrafted with Love</h1>
            <p>Unique, authentic pieces made by skilled artisans using traditional techniques</p>
            <a href="#products" class="cta-button">Shop Our Collection</a>
        </div>
    </section>

    <section class="featured-products" id="products">
        <div class="container">
            <h2 class="section-title">Featured Handmade Goods</h2>
            <div class="products-grid">
                <div class="product-card">
                    <div class="product-image">🏺</div>
                    <div class="product-info">
                        <h3>Ceramic Vase Collection</h3>
                        <div class="product-price">$89.99</div>
                        <p>Hand-thrown ceramic vases with unique glazes. Each piece is one-of-a-kind, fired in our traditional kiln.</p>
                        <button class="product-button">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">🧺</div>
                    <div class="product-info">
                        <h3>Woven Baskets</h3>
                        <div class="product-price">$45.99</div>
                        <p>Natural fiber baskets woven using traditional techniques passed down through generations.</p>
                        <button class="product-button">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">🕯️</div>
                    <div class="product-info">
                        <h3>Soy Candles</h3>
                        <div class="product-price">$24.99</div>
                        <p>Hand-poured soy candles with natural fragrances. Made with organic cotton wicks and essential oils.</p>
                        <button class="product-button">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">🪵</div>
                    <div class="product-info">
                        <h3>Wooden Bowls</h3>
                        <div class="product-price">$67.99</div>
                        <p>Handcrafted wooden bowls made from sustainably sourced hardwood. Perfect for serving or display.</p>
                        <button class="product-button">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">🧶</div>
                    <div class="product-info">
                        <h3>Knitted Scarves</h3>
                        <div class="product-price">$39.99</div>
                        <p>Cozy hand-knitted scarves made from organic wool. Each scarf features unique patterns and colors.</p>
                        <button class="product-button">Add to Cart</button>
                    </div>
                </div>

                <div class="product-card">
                    <div class="product-image">🖼️</div>
                    <div class="product-info">
                        <h3>Handmade Frames</h3>
                        <div class="product-price">$52.99</div>
                        <p>Rustic picture frames crafted from reclaimed wood. Each frame tells its own story through weathered textures.</p>
                        <button class="product-button">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="meet-maker" id="maker">
        <div class="container">
            <div class="maker-content">
                <div class="maker-image">👩‍🎨</div>
                <div class="maker-info">
                    <h2>Meet Sarah</h2>
                    <h3>Master Artisan & Founder</h3>
                    <p>Hello! I'm Sarah, the heart and hands behind Artisan's Corner. My journey into crafting began over 15 years ago when I discovered the meditative joy of working with clay in my grandmother's studio.</p>
                    
                    <p>What started as a weekend hobby has blossomed into a passionate pursuit of creating beautiful, functional art pieces that bring warmth and character to homes around the world.</p>
                    
                    <p>Every piece I create is infused with love, attention to detail, and a deep respect for traditional crafting techniques. I believe that handmade goods carry a special energy that mass-produced items simply cannot match.</p>
                    
                    <div class="maker-stats">
                        <div class="stat-item">
                            <span class="stat-number">15+</span>
                            <span class="stat-label">Years Experience</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">500+</span>
                            <span class="stat-label">Happy Customers</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">1000+</span>
                            <span class="stat-label">Pieces Created</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`,
            styles: ` * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            --dark-gradient: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 100%);
            --accent-color: #ff6b6b;
            --text-light: #ffffff;
            --text-dark: #333333;
            --card-bg: rgba(255, 255, 255, 0.1);
            --glass-bg: rgba(255, 255, 255, 0.08);
        }

        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: var(--text-light);
            overflow-x: hidden;
        }

        /* Smooth scrolling */
        html {
            scroll-behavior: smooth;
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(20px);
            z-index: 1000;
            padding: 1rem 0;
            transition: all 0.3s ease;
        }

        nav.scrolled {
            background: rgba(0, 0, 0, 0.95);
            padding: 0.5rem 0;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            background: var(--primary-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            color: var(--text-light);
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a:hover {
            color: var(--accent-color);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary-gradient);
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            background: var(--dark-gradient);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') center/cover;
            opacity: 0.3;
            z-index: 1;
        }

        .hero-content {
            text-align: center;
            z-index: 2;
            position: relative;
            max-width: 800px;
            padding: 0 2rem;
        }

        .hero h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
            background: var(--primary-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: fadeInUp 1s ease-out;
        }

        .hero p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            animation: fadeInUp 1s ease-out 0.3s both;
        }

        .cta-button {
            display: inline-block;
            padding: 1rem 2.5rem;
            background: var(--secondary-gradient);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            transition: all 0.3s ease;
            animation: fadeInUp 1s ease-out 0.6s both;
            box-shadow: 0 10px 30px rgba(245, 87, 108, 0.3);
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(245, 87, 108, 0.4);
        }

        /* Floating elements */
        .floating-element {
            position: absolute;
            opacity: 0.1;
            animation: float 6s ease-in-out infinite;
        }

        .floating-element:nth-child(1) {
            top: 20%;
            left: 10%;
            animation-delay: 0s;
        }

        .floating-element:nth-child(2) {
            top: 60%;
            right: 15%;
            animation-delay: 2s;
        }

        .floating-element:nth-child(3) {
            bottom: 20%;
            left: 20%;
            animation-delay: 4s;
        }

        /* Sections */
        .section {
            padding: 5rem 0;
            position: relative;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            background: var(--primary-gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* About Section */
        .about {
            background: var(--dark-gradient);
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .about-text {
            font-size: 1.1rem;
            line-height: 1.8;
            opacity: 0.9;
        }

        .about-image {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .about-image img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .about-image:hover img {
            transform: scale(1.05);
        }

        /* Services Section */
        .services {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .service-card {
            background: var(--glass-bg);
            padding: 2.5rem;
            border-radius: 20px;
            text-align: center;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
        }

        .service-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 1.5rem;
            background: var(--secondary-gradient);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
        }

        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-light);
        }

        .service-card p {
            opacity: 0.8;
            line-height: 1.6;
        }

        /* Portfolio Section */
        .portfolio {
            background: var(--dark-gradient);
        }

        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
        }

        .portfolio-item {
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            height: 250px;
            background: var(--primary-gradient);
            cursor: pointer;
            transition: all 0.3s ease;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        .portfolio-item.project-1 {
            background-image: url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
        }

        .portfolio-item.project-2 {
            background-image: url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
        }

        .portfolio-item.project-3 {
            background-image: url('https://images.unsplash.com/photo-1571974599782-87624638275b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
        }

        .portfolio-item.project-4 {
            background-image: url('https://images.unsplash.com/photo-1520637836862-4d197d17c783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
        }

        .portfolio-item.project-5 {
            background-image: url('https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
        }

        .portfolio-item.project-6 {
            background-image: url('https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
        }

        .portfolio-item:hover {
            transform: scale(1.03);
            box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
        }

        .portfolio-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            opacity: 0;
            transition: opacity 0.3s ease;
            backdrop-filter: blur(5px);
        }

        .portfolio-item:hover .portfolio-overlay {
            opacity: 1;
        }

        .portfolio-title {
            font-size: 1.3rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        .portfolio-desc {
            opacity: 0.8;
            text-align: center;
            padding: 0 1rem;
        }

        /* Contact Section */
        .contact {
            background: linear-gradient(135deg, #16213e 0%, #0f3460 100%);
        }

        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
        }

        .contact-info h3 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            color: var(--accent-color);
        }

        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
            gap: 1rem;
        }

        .contact-icon {
            width: 50px;
            height: 50px;
            background: var(--secondary-gradient);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }

        .contact-form {
            background: var(--glass-bg);
            padding: 2.5rem;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--text-light);
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            color: var(--text-light);
            transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--accent-color);
            box-shadow: 0 0 10px rgba(255, 107, 107, 0.3);
        }

        .submit-btn {
            width: 100%;
            padding: 1rem;
            background: var(--secondary-gradient);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(245, 87, 108, 0.3);
        }

        /* Footer */
        footer {
            background: #0a0a0a;
            text-align: center;
            padding: 2rem 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-bottom: 1rem;
        }

        .social-links a {
            width: 50px;
            height: 50px;
            background: var(--primary-gradient);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .social-links a:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-20px);
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }

            .hero p {
                font-size: 1.1rem;
            }

            .nav-links {
                display: none;
            }

            .about-content,
            .contact-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .section-title {
                font-size: 2rem;
            }

            .services-grid,
            .portfolio-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Scroll animations */
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }`
        },
        "id2": {
            name: 'Alex Chen Photography - Professional Portfolio',
            component: `<body>
    <header>
        <nav>
            <div class="nav-container">
                <div class="logo">Alex Chen</div>
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="hamburger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-content">
            <h1>Capturing Moments, Preserving Memories</h1>
            <p>Professional photographer specializing in landscape, portrait, and event photography</p>
            <a href="#portfolio" class="btn">View My Work</a>
        </div>
    </section>

    <!-- Featured Work -->
    <section class="featured">
        <div class="container">
            <h2 class="section-title">Featured Work</h2>
            <div class="featured-images">
                <div class="featured-item">
                    <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="City Lights">
                    <div class="featured-overlay">
                        <h3>Urban Dreams</h3>
                    </div>
                </div>
                <div class="featured-item">
                    <img src="https://images.unsplash.com/photo-1587325355586-2b84475b7e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Mountain Sunset">
                    <div class="featured-overlay">
                        <h3>Mountain Majesty</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio" id="portfolio">
        <div class="container">
            <h2 class="section-title">Portfolio</h2>
            <div class="portfolio-categories">
                <button class="portfolio-filter active" data-filter="all">All</button>
                <button class="portfolio-filter" data-filter="landscape">Landscape</button>
                <button class="portfolio-filter" data-filter="portrait">Portrait</button>
                <button class="portfolio-filter" data-filter="event">Event</button>
                <button class="portfolio-filter" data-filter="street">Street</button>
            </div>
            <div class="portfolio-grid">
                <div class="portfolio-item landscape">
                    <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Landscape 1">
                    <div class="portfolio-overlay">
                        <h3>Morning Fog</h3>
                        <p>Landscape Photography</p>
                    </div>
                </div>
                <div class="portfolio-item portrait">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Portrait 1">
                    <div class="portfolio-overlay">
                        <h3>Genuine Smile</h3>
                        <p>Portrait Photography</p>
                    </div>
                </div>
                <div class="portfolio-item event">
                    <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="Event 1">
                    <div class="portfolio-overlay">
                        <h3>Wedding Joy</h3>
                        <p>Event Photography</p>
                    </div>
                </div>
                <div class="portfolio-item street">
                    <img src="https://images.unsplash.com/photo-1513031300226-c8fb12de9abe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Street 1">
                    <div class="portfolio-overlay">
                        <h3>Urban Life</h3>
                        <p>Street Photography</p>
                    </div>
                </div>
                <div class="portfolio-item landscape">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Landscape 2">
                    <div class="portfolio-overlay">
                        <h3>Valley View</h3>
                        <p>Landscape Photography</p>
                    </div>
                </div>
                <div class="portfolio-item portrait">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Portrait 2">
                    <div class="portfolio-overlay">
                        <h3>Thoughtful Moment</h3>
                        <p>Portrait Photography</p>
                    </div>
                </div>
                <div class="portfolio-item event">
                    <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Event 2">
                    <div class="portfolio-overlay">
                        <h3>Concert Energy</h3>
                        <p>Event Photography</p>
                    </div>
                </div>
                <div class="portfolio-item street">
                    <img src="https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Street 2">
                    <div class="portfolio-overlay">
                        <h3>Morning Commute</h3>
                        <p>Street Photography</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
        <div class="container">
            <div class="about-content">
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1493863641943-9a9eaaaef7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80" alt="Alex Chen - Photographer">
                </div>
                <div class="about-text">
                    <h2 class="section-title">About Me</h2>
                    <p class="about-intro">I'm Alex Chen, a professional photographer with over 10 years of experience capturing life's most beautiful and meaningful moments.</p>
                    <p>My journey in photography began when I was given my first camera at the age of 16. What started as a hobby quickly grew into a passion that has taken me around the world, from the bustling streets of Tokyo to the serene landscapes of Iceland.</p>
                    <p>I believe that photography is more than just taking pictures—it's about telling stories, preserving emotions, and creating timeless art that resonates with people. Whether I'm shooting a wedding, a portrait session, or a landscape, my goal is always to capture authentic moments that reflect the true essence of what I see.</p>
                    <div class="about-stats">
                        <div class="stat">
                            <span class="stat-number">10+</span>
                            <span class="stat-text">Years Experience</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">500+</span>
                            <span class="stat-text">Photo Sessions</span>
                        </div>
                        <div class="stat">
                            <span class="stat-number">50+</span>
                            <span class="stat-text">Awards Won</span>
                        </div>
                    </div>
                    <a href="#contact" class="btn">Let's Work Together</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
        <div class="container">
            <h2 class="section-title">My Services</h2>
            <div class="services-grid">
                <div class="service-item">
                    <div class="service-icon">
                        <i class="fas fa-mountain"></i>
                    </div>
                    <h3>Landscape Photography</h3>
                    <p>Capturing the beauty of nature in all its glory, from majestic mountains to serene seascapes.</p>
                </div>
                <div class="service-item">
                    <div class="service-icon">
                        <i class="fas fa-portrait"></i>
                    </div>
                    <h3>Portrait Photography</h3>
                    <p>Professional portraits that capture personality, emotions, and authentic expressions.</p>
                </div>
                <div class="service-item">
                    <div class="service-icon">
                        <i class="fas fa-glass-cheers"></i>
                    </div>
                    <h3>Event Photography</h3>
                    <p>Documenting special moments from weddings, corporate events, and family celebrations.</p>
                </div>
                <div class="service-item">
                    <div class="service-icon">
                        <i class="fas fa-city"></i>
                    </div>
                    <h3>Street Photography</h3>
                    <p>Candid shots that tell the story of urban life and human interaction in cities.</p>
                </div>
            </div>
            <div class="pricing">
                <h3 class="pricing-title">Photography Packages</h3>
                <div class="pricing-grid">
                    <div class="pricing-item">
                        <div class="pricing-header">
                            <h4>Basic Session</h4>
                            <div class="price">$350</div>
                        </div>
                        <ul class="pricing-features">
                            <li>2-hour photo session</li>
                            <li>One location</li>
                            <li>20 digital images</li>
                            <li>Online gallery</li>
                            <li>Basic editing included</li>
                        </ul>
                        <a href="#contact" class="btn btn-outline">Book Now</a>
                    </div>
                    <div class="pricing-item featured">
                        <div class="pricing-header">
                            <h4>Premium Package</h4>
                            <div class="price">$650</div>
                        </div>
                        <ul class="pricing-features">
                            <li>4-hour photo session</li>
                            <li>Multiple locations</li>
                            <li>50 digital images</li>
                            <li>Online gallery</li>
                            <li>Advanced editing included</li>
                            <li>10 professionally printed photos</li>
                        </ul>
                        <a href="#contact" class="btn">Book Now</a>
                    </div>
                    <div class="pricing-item">
                        <div class="pricing-header">
                            <h4>Custom Event</h4>
                            <div class="price">Custom</div>
                        </div>
                        <ul class="pricing-features">
                            <li>Custom duration</li>
                            <li>Event coverage</li>
                            <li>Customized deliverables</li>
                            <li>Priority editing</li>
                            <li>Print packages available</li>
                        </ul>
                        <a href="#contact" class="btn btn-outline">Contact for Quote</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
        <div class="container">
            <h2 class="section-title">Client Testimonials</h2>
            <div class="testimonial-slider">
                <div class="testimonial-item active">
                    <div class="testimonial-text">
                        "Alex has an incredible eye for detail. He captured our wedding day perfectly, with photos that truly reflect the emotions and special moments of the day. Highly recommended!"
                    </div>
                    <div class="testimonial-author">
                        <div class="author-name">Sarah & Michael Johnson</div>
                        <div class="author-role">Wedding Clients</div>
                    </div>
                </div>
                <div class="testimonial-item">
                    <div class="testimonial-text">
                        "Working with Alex on our corporate event was a pleasure. He was professional, unobtrusive, and delivered stunning photos that perfectly captured the essence of our brand launch."
                    </div>
                    <div class="testimonial-author">
                        <div class="author-name">James Williams</div>
                        <div class="author-role">Marketing Director</div>
                    </div>
                </div>
                <div class="testimonial-item">
                    <div class="testimonial-text">
                        "The family portraits Alex took for us are now treasured keepsakes. He was patient with our children and captured their personalities beautifully. The quality of his work is exceptional."
                    </div>
                    <div class="testimonial-author">
                        <div class="author-name">Emily Rodriguez</div>
                        <div class="author-role">Family Portrait Client</div>
                    </div>
                </div>
                <div class="testimonial-nav">
                    <button class="prev-btn"><i class="fas fa-chevron-left"></i></button>
                    <div class="testimonial-dots">
                        <span class="dot active" data-index="0"></span>
                        <span class="dot" data-index="1"></span>
                        <span class="dot" data-index="2"></span>
                    </div>
                    <button class="next-btn"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-text">
                            <h3>Location</h3>
                            <p>123 Photography Lane, New York, NY 10001</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-text">
                            <h3>Email</h3>
                            <p>contact@alexchenphotography.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-text">
                            <h3>Phone</h3>
                            <p>(555) 123-4567</p>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-pinterest"></i></a>
                    </div>
                </div>
                <div class="contact-form">
                    <form>
                        <div class="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Your Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Your Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Instagram Feed -->
    <section class="instagram-feed">
        <div class="container">
            <h2 class="section-title">Follow My Journey</h2>
            <p class="instagram-handle">@alexchenphotography</p>
            <div class="instagram-grid">
                <a href="#" class="instagram-item">
                    <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="Instagram 1">
                </a>
                <a href="#" class="instagram-item">
                    <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="Instagram 2">
                </a>
                <a href="#" class="instagram-item">
                    <img src="https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Instagram 3">
                </a>
                <a href="#" class="instagram-item">
                    <img src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Instagram 4">
                </a>
                <a href="#" class="instagram-item">
                    <img src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Instagram 5">
                </a>
                <a href="#" class="instagram-item">
                    <img src="https://images.unsplash.com/photo-1535443127797-b7e0b6dedb3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Instagram 6">
                </a>
            </div>
            <a href="#" class="btn btn-outline instagram-btn">Follow on Instagram</a>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">Alex Chen Photography</div>
                <div class="footer-links">
                    <a href="#portfolio">Portfolio</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Alex Chen Photography. All rights reserved.</p>
            </div>
        </div>
    </footer>`,
            styles: `
:root {
    --color-dark: #121212;
    --color-light: #ffffff;
    --color-gray: #f5f5f5;
    --color-accent: #d4af37;
    --color-text: #333333;
    --color-text-light: #999999;
    --font-main: 'Helvetica Neue', Arial, sans-serif;
    --transition: all 0.3s ease;
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --shadow-strong: 0 10px 30px rgba(0, 0, 0, 0.2);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-main);
    line-height: 1.6;
    color: var(--color-text);
    background-color: var(--color-light);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

h1, h2, h3, h4 {
    font-weight: 700;
    line-height: 1.2;
}

.section-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
    padding-bottom: 1rem;
}

.section-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background-color: var(--color-accent);
}

.btn {
    display: inline-block;
    background-color: var(--color-accent);
    color: var(--color-dark);
    padding: 12px 30px;
    border-radius: 4px;
    font-weight: 600;
    transition: var(--transition);
    border: 2px solid var(--color-accent);
}

.btn:hover {
    background-color: transparent;
    color: var(--color-accent);
}

.btn-outline {
    background-color: transparent;
    color: var(--color-accent);
}

.btn-outline:hover {
    background-color: var(--color-accent);
    color: var(--color-dark);
}

header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: var(--transition);
}

nav {
    padding: 20px 0;
    transition: var(--transition);
}

header.scrolled {
    background-color: rgba(18, 18, 18, 0.95);
    box-shadow: var(--shadow);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--color-light);
    letter-spacing: 1px;
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-links a {
    color: var(--color-light);
    font-weight: 600;
    position: relative;
    padding: 5px 0;
}

.nav-links a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
    transition: var(--transition);
}

.nav-links a:hover::after {
    width: 100%;
}

.hamburger {
    display: none;
    cursor: pointer;
}

.hamburger .line {
    width: 30px;
    height: 3px;
    background-color: var(--color-light);
    margin: 6px 0;
    transition: var(--transition);
}

/* Hero Section */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                url('https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-light);
    position: relative;
}

.hero-content {
    text-align: center;
    max-width: 800px;
    padding: 0 20px;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    animation: fadeInDown 1s ease-out;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
    animation: fadeInUp 1s ease-out 0.3s forwards;
    opacity: 0;
}

.hero .btn {
    animation: fadeInUp 1s ease-out 0.6s forwards;
    opacity: 0;
}


.featured {
    padding: 6rem 0;
    background-color: var(--color-light);
}

.featured-images {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.featured-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    height: 400px;
}

.featured-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.featured-item:hover img {
    transform: scale(1.05);
}

.featured-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    color: var(--color-light);
    transition: var(--transition);
    opacity: 0;
}

.featured-item:hover .featured-overlay {
    opacity: 1;
}

.featured-overlay h3 {
    font-size: 1.5rem;
    margin-bottom: 5px;
}


.portfolio {
    padding: 6rem 0;
    background-color: var(--color-gray);
}

.portfolio-categories {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 2rem;
}

.portfolio-filter {
    background: transparent;
    border: none;
    padding: 8px 20px;
    cursor: pointer;
    font-weight: 600;
    transition: var(--transition);
    color: var(--color-text);
    border-radius: 30px;
}

.portfolio-filter.active, .portfolio-filter:hover {
    background-color: var(--color-accent);
    color: var(--color-dark);
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: var(--shadow);
    aspect-ratio: 1/1;
}

.portfolio-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.portfolio-item:hover img {
    transform: scale(1.1);
}

.portfolio-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--color-light);
    padding: 20px;
    opacity: 0;
    transition: var(--transition);
}

.portfolio-item:hover .portfolio-overlay {
    opacity: 1;
}

.portfolio-overlay h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
}

.portfolio-overlay p {
    font-size: 0.9rem;
    opacity: 0.8;
}


.about {
    padding: 6rem 0;
    background-color: var(--color-light);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.about-image {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: var(--shadow-strong);
}

.about-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.about-text {
    padding: 20px 0;
}

.about-intro {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--color-accent);
}

.about-text p {
    margin-bottom: 1.5rem;
}

.about-stats {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
}

.stat {
    text-align: center;
    padding: 20px;
}

.stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-accent);
}

.stat-text {
    font-size: 0.9rem;
    color: var(--color-text-light);
}


.services {
    padding: 6rem 0;
    background-color: var(--color-gray);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 4rem;
}

.service-item {
    background-color: var(--color-light);
    padding: 30px;
    border-radius: 8px;
    text-align: center;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.service-item:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-strong);
}

.service-icon {
    width: 70px;
    height: 70px;
    margin: 0 auto 20px;
    background-color: var(--color-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--color-dark);
    font-size: 1.5rem;
}

.service-item h3 {
    margin-bottom: 15px;
}


.pricing-title {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 2rem;
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.pricing-item {
    background-color: var(--color-light);
    border-radius: 8px;
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: var(--transition);
}

.pricing-item.featured {
    transform: scale(1.05);
    box-shadow: var(--shadow-strong);
    position: relative;
}

.pricing-item:hover {
    box-shadow: var(--shadow-strong);
}

.pricing-header {
    padding: 20px;
    background-color: var(--color-dark);
    color: var(--color-light);
    text-align: center;
}

.featured .pricing-header {
    background-color: var(--color-accent);
    color: var(--color-dark);
}

.pricing-header h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.price {
    font-size: 2rem;
    font-weight: 700;
}

.pricing-features {
    padding: 20px;
    text-align: center;
}

.pricing-features li {
    padding: 10px 0;
    border-bottom: 1px solid var(--color-gray);
}

.pricing-features li:last-child {
    border-bottom: none;
}

.pricing-item .btn {
    display: block;
    margin: 20px;
    text-align: center;
}


.testimonials {
    padding: 6rem 0;
    background-color: var(--color-light);
}

.testimonial-slider {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 0;
}

.testimonial-item {
    display: none;
    text-align: center;
    padding: 0 20px;
}

.testimonial-item.active {
    display: block;
    animation: fadeIn 0.5s ease-in;
}

.testimonial-text {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    position: relative;
    font-style: italic;
}

.testimonial-text::before,
.testimonial-text::after {
    content: '"';
    font-size: 3rem;
    color: var(--color-accent);
    opacity: 0.3;
    position: absolute;
    top: -20px;
    left: -10px;
}

.testimonial-text::after {
    content: '"';
    right: -10px;
    left: auto;
}

.testimonial-author {
    margin-top: 1rem;
}

.author-name {
    font-weight: 700;
    color: var(--color-accent);
    margin-bottom: 5px;
}

.author-role {
    font-size: 0.9rem;
    color: var(--color-text-light);
}

.testimonial-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
}

.prev-btn, .next-btn {
    background: transparent;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 5px;
    color: var(--color-text);
    transition: var(--transition);
}

.prev-btn:hover, .next-btn:hover {
    color: var(--color-accent);
}

.testimonial-dots {
    display: flex;
    gap: 10px;
    margin: 0 20px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--color-gray);
    cursor: pointer;
    transition: var(--transition);
}

.dot.active {
    background-color: var(--color-accent);
    transform: scale(1.2);
}


.contact {
    padding: 6rem 0;
    background-color: var(--color-gray);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

.contact-icon {
    width: 50px;
    height: 50px;
    background-color: var(--color-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 20px;
    color: var(--color-dark);
}

.contact-text h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 2rem;
}

.social-link {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-dark);
    color: var(--color-light);
    border-radius: 50%;
    transition: var(--transition);
}

.social-link:hover {
    background-color: var(--color-accent);
    transform: translateY(-3px);
}

.contact-form {
    background-color: var(--color-light);
    padding: 30px;
    border-radius: 8px;
    box-shadow: var(--shadow);
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-accent);
}


.instagram-feed {
    padding: 6rem 0;
    background-color: var(--color-light);
    text-align: center;
}

.instagram-handle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--color-text-light);
}

.instagram-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 15px;
    margin-bottom: 2rem;
}

.instagram-item {
    position: relative;
    overflow: hidden;
    aspect-ratio: 1/1;
    border-radius: 4px;
}

.instagram-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.instagram-item::after {
    content: "\f16d";
    font-family: "Font Awesome 5 Brands";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    opacity: 0;
    transition: var(--transition);
}

.instagram-item:hover img {
    transform: scale(1.1);
}

.instagram-item:hover::after {
    opacity: 1;
}

.instagram-btn {
    margin-top: 2rem;
}


footer {
    background-color: var(--color-dark);
    color: var(--color-light);
    padding: 3rem 0 1.5rem;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.footer-logo {
    font-size: 1.5rem;
    font-weight: 700;
}

.footer-links {
    display: flex;
    gap: 20px;
}

.footer-links a {
    transition: var(--transition);
}

.footer-links a:hover {
    color: var(--color-accent);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--color-text-light);
}


@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}


@media screen and (max-width: 992px) {
    .about-content,
    .contact-content {
        grid-template-columns: 1fr;
    }
    
    .about-image {
        margin-bottom: 2rem;
    }
    
    .featured-images {
        grid-template-columns: 1fr;
    }
}

@media screen and (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }
    
    .nav-links {
        display: none;
    }
    
    .hamburger {
        display: block;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .about-stats {
        flex-direction: column;
        gap: 20px;
    }
    
    .portfolio-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .instagram-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 480px) {
    .hero h1 {
        font-size: 2rem;
    }
    
    .portfolio-grid {
        grid-template-columns: 1fr;
    }
    
    .pricing-grid {
        grid-template-columns: 1fr;
    }
    
    .pricing-item.featured {
        transform: none;
    }
}`
        }

    }
}