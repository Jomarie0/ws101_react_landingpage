import React from 'react';
import './History.css'; // Assuming you have styles for the timeline

const History = () => {
  return (
    <section id="History">
      <h1><span className="gradient-text">History of Web Development</span></h1>
      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h2>The 1960s: Slow Beginning</h2>
            <ul>
              <li>
                In the 1960s, computer scientists started working on a project which we would one day call the Internet. It all started as a US Department of Defense project together with the Advanced Research Projects Agency Network, or ARPANET.
              </li>
              <li>
                In 1965, MIT lab created computers that could communicate with each other. Four years later, the first remote message was sent from one state to another; however, the connection crashed halfway.
              </li>
              <li>
                During this decade, programming languages like COBOL and BASIC were used.
              </li>
            </ul>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h2>The 1970s: Birth of the Internet</h2>
            <ul>
              <li>
                During this decade, web development sped up. This is the time the first email was sent over a closed network, and this is the period we can announce "the Internet" as born. Internet service providers were launched, and Internet protocols were designed. In 1976, Queen Elizabeth II sent her first email.
              </li>
              <li>
                New programming languages like Pascal and C appeared.
              </li>
            </ul>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h2>The 1980s: Domain Names</h2>
            <ul>
              <li>
                The 1980s brought domain name suffixes such as .com, .edu, and others. The world's first and oldest registered .com domain, Symbolics.com, was registered in 1985, and the site is still accessible today as a part of Internet history. Academic centers in the US, students, and researchers had access to the Internet at 56,000 bits dial-up speed.
              </li>
              <li>
                More programming languages were created, such as Ada, Smalltalk, C++, Objective-C, and Perl, bringing object-oriented programming to the forefront.
              </li>
            </ul>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h2>The 1990s: Birth of Open-Source Systems</h2>
            <ul>
              <li>
                Thanks to Tim Berners-Lee, we now have Hypertext Markup Language (HTML), the backbone of every web page ever written. HTML creation was a renaissance for the Internet. By 1993, there were already 2 million computers connected to the Internet. By 1995, major web players like Yahoo, Amazon, Craigslist, and eBay were launched. SEO emerged when Google launched its search engine in 1998.
              </li>
              <li>
                Free and open-source software, such as the Linux operating system, appeared, along with programming languages like Haskell, Python, Java, Ruby, and JavaScript.
              </li>
            </ul>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h2>The 2000s: Rise of Internet Startups</h2>
            <ul>
              <li>
                Thousands of Internet startups appeared during this period, including Myspace, Skype, WordPress (2003), Facebook, Firefox (2004), YouTube (2005), and Twitter (2006).
              </li>
              <li>
                Adobe Flash provided interactive elements, and cascading style sheets (CSS) made it easier to create in HTML. Developers started using the C# programming language.
              </li>
              <li>
                The rise of commodity computers led to the development of the Cloud, allowing applications to be updated and accessed in real-time instead of being downloaded to the user's computer.
              </li>
            </ul>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <h2>2010-2015: Web and Mobile Apps</h2>
            <ul>
              <li>
                The rise of mobile technology was significant, with smartphones and tablets becoming widespread. Social media platforms like Instagram and Pinterest joined Facebook, Twitter, and others, which had millions of users. Social media also began playing a role in protests and conflicts.
              </li>
              <li>
                In 2013, Edward Snowden revealed the US government was wiretapping citizens without their knowledge.
              </li>
              <li>
                Online banking became widespread, with half of US citizens holding online bank accounts.
              </li>
            </ul>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <h2>2016 - Present: Strategic Technology Trends</h2>
            <ul>
              <li>
                The term "Internet of Things" (IoT) emerged as more household devices began to feature built-in Wi-Fi or Bluetooth. Cryptocurrencies and blockchain technology created new business opportunities. Virtual reality and Artificial Intelligence (AI) continue to rise.
              </li>
              <li>
                AI has become one of the most popular technologies in the past 4 years, despite negative portrayals in science fiction. Major companies like Apple, Google, and Tesla have demonstrated how AI and machine learning (ML) can transform daily life.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
