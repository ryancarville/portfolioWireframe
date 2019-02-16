function featuredFullstackClick(){
    $('.featured').on('click', '.jsFullstackLink', event => {
        document.getElementById("main").innerHTML=
        `<section class="container">
            <div class="fullstackProject">
                <img src="images/quizAppImg.png" alt="fullstack project image">    
                <p><span>quiz app</span></p>
                <p>short app to test your photography knowledge.<br><b>html - css - js</b></p>
                <ul class="demoGit">
                    <a href="https://ryancarville.github.io/quizAppFinal/" target="_blank">live demo</a>
                    <a href="https://github.com/ryancarville/quizAppFinal" target="_blank">GitHub Repo</a>
                </ul>
            </div>
            <br>
            <div class="fullstackProject">
                <img src="images/quizAppImg.png" alt="fullstack project image">
                <p><span>quiz app</span></p>
                <p>short app to test your photography knowledge.<br><b>html - css - js</b></p>
                <ul class="demoGit">
                    <a href="https://ryancarville.github.io/quizAppFinal/" target="_blank">live demo</a>
                    <a href="https://github.com/ryancarville/quizAppFinal" target="_blank">GitHub Repo</a>
                </ul>
            </div>
        </section>`;
    });
}

function featuredPhtographyClick(){
    $('.featured').on('click', '.jsPhotographyLink', event => {
        document.getElementById("main").innerHTML= `<div class="photography">
        <p>Will complete this later.</p>
    </div>`;
    });
}

function fullstackClick(){
    $('.desktopMenu').on('click', '.jsFullstackLink', event => {
        document.getElementById("main").innerHTML=
        `<section class="container">
            <div class="fullstackProject">
                <img src="images/quizAppImg.png" alt="fullstack project image">    
                <p><span>quiz app</span></p>
                <p>short app to test your photography knowledge.<br><b>html - css - js</b></p>
                <ul class="demoGit">
                    <a href="https://ryancarville.github.io/quizAppFinal/" target="_blank">live demo</a>
                    <a href="https://github.com/ryancarville/quizAppFinal" target="_blank">GitHub Repo</a>
                </ul>
            </div>
            <br>
            <div class="fullstackProject">
                <img src="images/quizAppImg.png" alt="fullstack project image">
                <p><span>quiz app</span></p>
                <p>short app to test your photography knowledge.<br><b>html - css - js</b></p>
                <ul class="demoGit">
                    <a href="https://ryancarville.github.io/quizAppFinal/" target="_blank">live demo</a>
                    <a href="https://github.com/ryancarville/quizAppFinal" target="_blank">GitHub Repo</a>
                </ul>
            </div>
        </section>`;
    });
}

function phtographyClick(){
    $('.desktopMenu').on('click', '.jsPhotographyLink', event => {
        document.getElementById("main").innerHTML= `<div class="photography">
        <p>Will complete this later.</p>
    </div>`;
    });
}

function aboutClick(){
    $('.desktopMenu').on('click', '.jsAboutLink', event => {
        document.getElementById("main").innerHTML=
        `<section role="bio">
            <div class="bioText">
                <p>Hello! I’m Ryan. A fullstack developer, commercial phtoographer and eternal student of tech.<br><br>
                Tech and I go way back to when I built my first machine at the age of 12 years old.  It has always 
                fascinated me with it’s logical magic of problem solving.  Even today, I still get a thrill when I 
                write a block of code and it renders as expected!  I am a graduate of the Fullstack Developer Course 
                at Thinkful and expanding my knowledge of current libraries and best practices is as routinely as my 
                morning cup of coffee.  I strive to write better code every day. <br><br>
                It may sound like tech has been my entire life.  However, it’s a recent professional endeavor.  
                For the past 15 years I have built, owned and created a global advertising photography studio. founded in 2007,  I grew the studio to call clients like Victoria’s Secret, Target,
                David Yurman, Clorox, eBay and many others, regulars.  With my background in commercial photography, I 
                bring a knowledge of design and branding to all my work.
                </p>
                <img src="images/aboutImg.jpg" alt="bio image">
            </div>
        </section>`;
    });
}

function contactClick(){
    $('.desktopMenu').on('click', '.jsContactLink', event => {
        event.preventDefault();
        document.getElementById("main").innerHTML=
        `<div class="contactForm">
        <form action="FILL THIS OUT" method="post" enctype="text/plain">
                <fieldset>
                    <legend>say hello!</legend>
                    <label for="email">email</label><br>
                    <input type="email" placeholder="&nbsp;your email here" class="inputBox" required><br>
                    <label for="telNum">contact number</label><br>
                    <input type="tel" placeholder="&nbsp;your phone number here" class="inputBox"><br>
                    <label for="servicesNeeded">which service are you interested in</label><br>
                    <input type="radio" name="service" value="fullstack" required>&nbsp;fullstack<br>
                    <input type="radio" name="service" value="photography">&nbsp;photography<br>
                    <input type="radio" name="service" value="both">&nbsp;both<br>
                    <label for="contactMsg">Enter your message here</label><br>
                    <textarea type="textarea" placeholder="your message here" cols="40" rows="10"  required></textarea><br> 
                    <button type="submit" value="send email">SEND EMAIL</button>
                </fieldset>
            </form>
        </div>`;
        contactFormSumbited();
    });
}

function homeClick(){
    $('.desktopMenu').on('click', '.jsHomeLink', event => {
        document.getElementById("main").innerHTML=
        `<div class="featured" id="featuredBio">
        <p>Fullstack developer and photography studio.<br>
        Find out more <a href="about.html">here</a>.</p>
        </div>
        <div class="container">
            <div class="featured">  
                </a><span>fullstack</span><a href="fullstack.html"><img src="images/quizAppImg.jpg">
            </div>
            <div class="featured">
                    <a href="photography.html"><img src="images/photographyHomeImg.jpg"></a><span>photography</span>
            </div>
            
            <br>
        </div>
        <div class="contactHome">
            <a href="mailto:hello@beardystudios.com?subject=Mail from Our Site"><img src="images/email.png" alt="email icon"></a>
            <a href="https://www.linkedin.com/in/ryancarville/" target="_blank"><img src="images/linkedInIcon.png" alt="linkedIn icon"></a>
            <a href="https://www.github.com" target="_blank"><img src="images/gitHubIcon.png" alt="github icon"></a>
            <a href="https://www.facebook.com/beardystudios" target="_blank"><img src="images/facebookIcon.png" alt="facebook icon"></a>
            <a href="https://www.instagram.com/ryancarville" target="_blank"><img src="images/instagramIcon.png" alt="instagram icon"></a>
        </div>`;
    });
}

function mobileFullstackClick(){
    $('.menuContent').on('click', '.jsFullstackLink', event => {
        document.getElementById("main").innerHTML=
        `<section class="container">
            <div class="fullstackProject">
                <img src="images/quizAppImg.png" alt="fullstack project image">    
                <p><span>quiz app</span></p>
                <p>short app to test your photography knowledge.<br><b>html - css - js</b></p>
                <ul class="demoGit">
                    <a href="https://ryancarville.github.io/quizAppFinal/" target="_blank">live demo</a>
                    <a href="https://github.com/ryancarville/quizAppFinal" target="_blank">GitHub Repo</a>
                </ul>
            </div>
            <br>
            <div class="fullstackProject">
                <img src="images/quizAppImg.png" alt="fullstack project image">
                <p><span>quiz app</span></p>
                <p>short app to test your photography knowledge.<br><b>html - css - js</b></p>
                <ul class="demoGit">
                    <a href="https://ryancarville.github.io/quizAppFinal/" target="_blank">live demo</a>
                    <a href="https://github.com/ryancarville/quizAppFinal" target="_blank">GitHub Repo</a>
                </ul>
            </div>
        </section>`;
    });
}

function mobilePhtographyClick(){
    $('.menuContent').on('click', '.jsPhotographyLink', event => {
        document.getElementById("main").innerHTML= `<div class="photography">
        <p>Will complete this later.</p>
    </div>`;
    });
}

function mobileAboutClick(){
    $('.menuContent').on('click', '.jsAboutLink', event => {
        document.getElementById("main").innerHTML=
        `<section role="bio">
            <div class="bioText">
                <p>Hello! I’m Ryan. A fullstack developer, commercial phtoographer and eternal student of tech.<br><br>
                Tech and I go way back to when I built my first machine at the age of 12 years old.  It has always 
                fascinated me with it’s logical magic of problem solving.  Even today, I still get a thrill when I 
                write a block of code and it renders as expected!  I am a graduate of the Fullstack Developer Course 
                at Thinkful and expanding my knowledge of current libraries and best practices is as routinely as my 
                morning cup of coffee.  I strive to write better code every day. <br><br>
                It may sound like tech has been my entire life.  However, it’s a recent professional endeavor.  
                For the past 15 years I have built, owned and created a global advertising photography studio. founded in 2007,  I grew the studio to call clients like Victoria’s Secret, Target,
                David Yurman, Clorox, eBay and many others, regulars.  With my background in commercial photography, I 
                bring a knowledge of design and branding to all my work.
                </p>
                <img src="images/aboutImg.jpg" alt="bio image">
            </div>
        </section>`;
    });
}

function mobileContactClick(){
    $('.menuContent').on('click', '.jsContactLink', event => {
        event.preventDefault();
        document.getElementById("main").innerHTML=
        `<div class="contactForm">
            <form action="FILL THIS OUT" method="post" enctype="text/plain">
                <fieldset>
                    <legend>say hello!</legend>
                    <label for="email">email</label><br>  
                    <input type="email" placeholder="&nbsp;your email here" class="inputBox" required><br>
                    <label for="telNum">contact number</label><br>
                    <input type="tel" placeholder="&nbsp;your phone number here" class="inputBox"><br>
                    <label for="servicesNeeded">which service are you interested in</label><br>
                    <input type="radio" name="service" value="fullstack" required>&nbsp;fullstack<br>
                    <input type="radio" name="service" value="photography">&nbsp;photography<br>
                    <input type="radio" name="service" value="both">&nbsp;both<br>
                    <label for="contactMsg">Enter your message here</label><br>
                    <textarea type="textarea" placeholder="your message here" cols="40" rows="10"  required></textarea><br> 
                    <button type="submit" value="send email">SEND EMAIL</button>
                </fieldset>
            </form>
        </div>`;
        contactFormSumbited();
    });
}

function mobileHomeClick(){
    $('.menuContent').on('click', '.jsHomeLink', event => {
        document.getElementById("main").innerHTML=
        `<div class="featured" id="featuredBio">
        <p>Fullstack developer and photography studio.<br>
        Find out more <a href="about.html">here</a>.</p>
        </div>
        <div class="container">
            <div class="featured">  
                </a><span>fullstack</span><a href="fullstack.html"><img src="images/quizAppImg.jpg">
            </div>
            <div class="featured">
                    <a href="photography.html"><img src="images/photographyHomeImg.jpg"></a><span>photography</span>
            </div>
            <br>
        </div>
        <div class="contactHome">
            <a href="mailto:hello@beardystudios.com?subject=Mail from Our Site"><img src="images/email.png" alt="email icon"></a>
            <a href="https://www.linkedin.com/in/ryancarville/" target="_blank"><img src="images/linkedInIcon.png" alt="linkedIn icon"></a>
            <a href="https://www.github.com" target="_blank"><img src="images/gitHubIcon.png" alt="github icon"></a>
            <a href="https://www.facebook.com/beardystudios" target="_blank"><img src="images/facebookIcon.png" alt="facebook icon"></a>
            <a href="https://www.instagram.com/ryancarville" target="_blank"><img src="images/instagramIcon.png" alt="instagram icon"></a>
        </div>`;
    });
}

function start(){
    featuredFullstackClick()
    featuredPhtographyClick();
    fullstackClick();
    phtographyClick();
    aboutClick();
    contactClick();
    homeClick();
    mobileFullstackClick();
    mobileHomeClick();  
    mobilePhtographyClick();
    mobileAboutClick();
    mobileContactClick();
    mobileHomeClick();
}

$(start());