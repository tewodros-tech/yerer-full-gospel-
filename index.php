<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yerer Full Gospel Believers Church | Worship in Spirit and Truth</title>
    <meta name="description" content="A Spirit-filled church in Yerer, Ethiopia. Join us for worship, healing, and community. Sunday 10 AM | Wednesday 6:30 PM | Friday 7 PM">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: #FDF8F0;
            color: #2C2418;
            line-height: 1.6;
        }
        
        h1, h2, h3, .logo {
            font-family: 'Playfair Display', serif;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .btn-primary {
            display: inline-block;
            background: #C49A6C;
            color: white;
            padding: 14px 32px;
            border-radius: 40px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }
        
        .btn-primary:hover {
            background: #A87B4E;
            transform: scale(1.05);
        }
        
        .btn-secondary {
            display: inline-block;
            background: transparent;
            color: #C49A6C;
            padding: 14px 32px;
            border-radius: 40px;
            text-decoration: none;
            font-weight: 600;
            border: 2px solid #C49A6C;
            transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
            background: #C49A6C;
            color: white;
        }
        
        .btn-outline {
            display: inline-block;
            background: transparent;
            color: white;
            padding: 14px 32px;
            border-radius: 40px;
            text-decoration: none;
            font-weight: 600;
            border: 2px solid white;
            transition: all 0.3s ease;
        }
        
        .btn-outline:hover {
            background: white;
            color: #2C2418;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #2C2418;
        }
        
        .section-subtitle {
            text-align: center;
            color: #666;
            margin-bottom: 50px;
            font-size: 1.1rem;
        }
        
        @media (max-width: 768px) {
            .section-title {
                font-size: 1.8rem;
            }
            nav .container {
                flex-direction: column;
                gap: 15px;
            }
            nav div:first-child {
                flex-wrap: wrap;
                justify-content: center;
            }
            .hero h1 {
                font-size: 2rem !important;
            }
        }
    </style>
</head>
<body>

    <!-- ===== NAVIGATION BAR ===== -->
    <nav style="background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.05); position: sticky; top: 0; z-index: 1000;">
        <div class="container" style="display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; flex-wrap: wrap;">
            <div class="logo" style="font-size: 1.5rem; font-weight: 700; color: #C49A6C;">
                <i class="fas fa-church" style="margin-right: 10px;"></i>
                Yerer Full Gospel
            </div>
            <div style="display: flex; gap: 30px; flex-wrap: wrap;">
                <a href="#" style="text-decoration: none; color: #2C2418; font-weight: 500;">Home</a>
                <a href="#" style="text-decoration: none; color: #2C2418; font-weight: 500;">About</a>
                <a href="#" style="text-decoration: none; color: #2C2418; font-weight: 500;">Sermons</a>
                <a href="#" style="text-decoration: none; color: #2C2418; font-weight: 500;">Events</a>
                <a href="#" style="text-decoration: none; color: #2C2418; font-weight: 500;">Give</a>
            </div>
            <div>
                <a href="#" class="btn-primary" style="padding: 10px 24px;">Join Live</a>
            </div>
        </div>
    </nav>

    <!-- ===== HERO SECTION ===== -->
    <section style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white; padding: 100px 0; text-align: center; position: relative;">
        <div class="container">
            <span style="background: #C49A6C20; padding: 8px 20px; border-radius: 40px; font-size: 0.9rem; letter-spacing: 2px;">YERER FULL GOSPEL BELIEVERS CHURCH</span>
            <h1 style="font-size: 3.5rem; margin: 30px 0 20px; line-height: 1.2;">Worship in Spirit <br>and Truth</h1>
            <p style="font-size: 1.2rem; margin-bottom: 30px; color: #ccc;">John 4:24</p>
            <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                <a href="#" class="btn-primary" style="background: #C49A6C;">WATCH LIVE</a>
                <a href="#" class="btn-outline">I'M NEW HERE</a>
                <a href="#" class="btn-outline">GIVE</a>
            </div>
            
            <!-- Countdown Timer -->
            <div style="margin-top: 50px; background: rgba(255,255,255,0.1); display: inline-block; padding: 20px 40px; border-radius: 60px; backdrop-filter: blur(10px);">
                <div style="font-size: 0.9rem; letter-spacing: 2px;">NEXT SERVICE IN</div>
                <div style="font-size: 2rem; font-weight: 700; font-family: monospace;" id="countdown">-- : -- : --</div>
            </div>
        </div>
    </section>

    <!-- ===== SERVICE TIMES ===== -->
    <section style="padding: 80px 0; background: white;">
        <div class="container">
            <h2 class="section-title">Join Our Services</h2>
            <p class="section-subtitle">Experience the presence of God in a warm, Spirit-filled environment</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                
                <div style="background: #FDF8F0; border-radius: 20px; padding: 30px; text-align: center; box-shadow: 0 5px 20px rgba(0,0,0,0.05); transition: transform 0.3s;">
                    <i class="fas fa-sun" style="font-size: 3rem; color: #C49A6C; margin-bottom: 20px;"></i>
                    <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Sunday Worship</h3>
                    <p style="font-size: 1.2rem; font-weight: 600; color: #C49A6C;">10:00 AM</p>
                    <p style="margin: 15px 0; color: #666;">In-person & Live Stream</p>
                    <p><i class="fas fa-map-marker-alt"></i> Yerer Main Campus</p>
                    <a href="#" style="display: inline-block; margin-top: 20px; color: #C49A6C; text-decoration: none;">Set Reminder <i class="fas fa-bell"></i></a>
                </div>
                
                <div style="background: #FDF8F0; border-radius: 20px; padding: 30px; text-align: center; box-shadow: 0 5px 20px rgba(0,0,0,0.05); transition: transform 0.3s;">
                    <i class="fas fa-book-open" style="font-size: 3rem; color: #C49A6C; margin-bottom: 20px;"></i>
                    <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Wednesday Bible Study</h3>
                    <p style="font-size: 1.2rem; font-weight: 600; color: #C49A6C;">6:30 PM</p>
                    <p style="margin: 15px 0; color: #666;">Book of Acts • Prayer</p>
                    <p><i class="fas fa-map-marker-alt"></i> Yerer Main Campus</p>
                    <a href="#" style="display: inline-block; margin-top: 20px; color: #C49A6C; text-decoration: none;">Set Reminder <i class="fas fa-bell"></i></a>
                </div>
                
                <div style="background: #FDF8F0; border-radius: 20px; padding: 30px; text-align: center; box-shadow: 0 5px 20px rgba(0,0,0,0.05); transition: transform 0.3s;">
                    <i class="fas fa-hands-praying" style="font-size: 3rem; color: #C49A6C; margin-bottom: 20px;"></i>
                    <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Friday Healing Service</h3>
                    <p style="font-size: 1.2rem; font-weight: 600; color: #C49A6C;">7:00 PM</p>
                    <p style="margin: 15px 0; color: #666;">Anointing • Testimonies</p>
                    <p><i class="fas fa-map-marker-alt"></i> Yerer Main Campus</p>
                    <a href="#" style="display: inline-block; margin-top: 20px; color: #C49A6C; text-decoration: none;">Set Reminder <i class="fas fa-bell"></i></a>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== WHAT WE BELIEVE ===== -->
    <section style="padding: 80px 0; background: #FDF8F0;">
        <div class="container">
            <h2 class="section-title">What We Believe</h2>
            <p class="section-subtitle">The Full Gospel distinctives that shape our faith</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;">
                
                <div style="text-align: center;">
                    <div style="background: white; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                        <i class="fas fa-cross" style="font-size: 2rem; color: #C49A6C;"></i>
                    </div>
                    <h3>Salvation</h3>
                    <p style="color: #666; margin-top: 10px;">By grace through faith in Jesus Christ</p>
                </div>
                
                <div style="text-align: center;">
                    <div style="background: white; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                        <i class="fas fa-dove" style="font-size: 2rem; color: #C49A6C;"></i>
                    </div>
                    <h3>Holy Spirit Baptism</h3>
                    <p style="color: #666; margin-top: 10px;">With evidence of speaking in tongues</p>
                </div>
                
                <div style="text-align: center;">
                    <div style="background: white; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                        <i class="fas fa-hand-holding-heart" style="font-size: 2rem; color: #C49A6C;"></i>
                    </div>
                    <h3>Divine Healing</h3>
                    <p style="color: #666; margin-top: 10px;">By His stripes we are healed</p>
                </div>
                
                <div style="text-align: center;">
                    <div style="background: white; width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
                        <i class="fas fa-cloud-sun" style="font-size: 2rem; color: #C49A6C;"></i>
                    </div>
                    <h3>Second Coming</h3>
                    <p style="color: #666; margin-top: 10px;">Jesus is coming soon</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== FEATURED SERMON ===== -->
    <section style="padding: 80px 0; background: white;">
        <div class="container">
            <h2 class="section-title">Latest Sermon</h2>
            <p class="section-subtitle">Strengthen your faith with the Word of God</p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center;">
                <div>
                    <img src="https://via.placeholder.com/500x350.png?text=Sermon+Thumbnail" alt="Sermon" style="width: 100%; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                </div>
                <div>
                    <span style="background: #C49A6C20; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem;">FEATURED</span>
                    <h3 style="font-size: 2rem; margin: 20px 0 15px;">Walking in the Spirit</h3>
                    <p style="color: #666; margin-bottom: 10px;"><i class="fas fa-user"></i> Pastor [Your Name]</p>
                    <p style="color: #666; margin-bottom: 20px;"><i class="fas fa-calendar"></i> June 15, 2026</p>
                    <p style="margin-bottom: 30px;">Discover how to live a Spirit-filled life, operate in the gifts, and bear fruit that remains.</p>
                    <div style="display: flex; gap: 15px; flex-wrap: wrap;">
                        <a href="#" class="btn-primary" style="padding: 12px 25px;"><i class="fas fa-play"></i> Watch Now</a>
                        <a href="#" class="btn-secondary" style="padding: 12px 25px;"><i class="fas fa-download"></i> Notes</a>
                        <a href="#" style="color: #C49A6C; text-decoration: none; align-self: center;"><i class="fab fa-whatsapp"></i> Share</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== TESTIMONIES ===== -->
    <section style="padding: 80px 0; background: #C49A6C10;">
        <div class="container">
            <h2 class="section-title">God Is Moving</h2>
            <p class="section-subtitle">Real testimonies from our church family</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                
                <div style="background: white; border-radius: 20px; padding: 30px; box-shadow: 0 5px 20px rgba(0,0,0,0.05);">
                    <i class="fas fa-quote-left" style="color: #C49A6C; font-size: 2rem; opacity: 0.3; margin-bottom: 15px; display: block;"></i>
                    <p style="font-style: italic; margin-bottom: 20px;">"After 10 years of high blood pressure, I was completely healed during Friday service. Glory to God!"</p>
                    <p style="font-weight: 600;">— Mekdes A.</p>
                    <div style="margin-top: 15px;">
                        <i class="fas fa-hands-praying" style="color: #C49A6C;"></i> <span id="amenCount1">147</span> people prayed
                        <button onclick="document.getElementById('amenCount1').innerText = parseInt(document.getElementById('amenCount1').innerText) + 1" style="margin-left: 10px; background: #C49A6C; border: none; color: white; padding: 5px 15px; border-radius: 20px; cursor: pointer;">Amen</button>
                    </div>
                </div>
                
                <div style="background: white; border-radius: 20px; padding: 30px; box-shadow: 0 5px 20px rgba(0,0,0,0.05);">
                    <i class="fas fa-quote-left" style="color: #C49A6C; font-size: 2rem; opacity: 0.3; margin-bottom: 15px; display: block;"></i>
                    <p style="font-style: italic; margin-bottom: 20px;">"My son returned home after 3 years of no contact. Prayer works. God restores families."</p>
                    <p style="font-weight: 600;">— Tekle B.</p>
                    <div style="margin-top: 15px;">
                        <i class="fas fa-hands-praying" style="color: #C49A6C;"></i> <span id="amenCount2">89</span> people prayed
                        <button onclick="document.getElementById('amenCount2').innerText = parseInt(document.getElementById('amenCount2').innerText) + 1" style="margin-left: 10px; background: #C49A6C; border: none; color: white; padding: 5px 15px; border-radius: 20px; cursor: pointer;">Amen</button>
                    </div>
                </div>
                
                <div style="background: white; border-radius: 20px; padding: 30px; box-shadow: 0 5px 20px rgba(0,0,0,0.05);">
                    <i class="fas fa-quote-left" style="color: #C49A6C; font-size: 2rem; opacity: 0.3; margin-bottom: 15px; display: block;"></i>
                    <p style="font-style: italic; margin-bottom: 20px;">"I received the baptism of the Holy Spirit and spoke in tongues. My prayer life has never been the same."</p>
                    <p style="font-weight: 600;">— Dawit M.</p>
                    <div style="margin-top: 15px;">
                        <i class="fas fa-hands-praying" style="color: #C49A6C;"></i> <span id="amenCount3">56</span> people prayed
                        <button onclick="document.getElementById('amenCount3').innerText = parseInt(document.getElementById('amenCount3').innerText) + 1" style="margin-left: 10px; background: #C49A6C; border: none; color: white; padding: 5px 15px; border-radius: 20px; cursor: pointer;">Amen</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== GIVE SECTION ===== -->
    <section style="padding: 80px 0; background: linear-gradient(135deg, #2C2418 0%, #1a1a2e 100%); color: white; text-align: center;">
        <div class="container">
            <h2 style="font-size: 2.5rem; margin-bottom: 20px;">Support the Ministry</h2>
            <p style="font-size: 1.1rem; margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto;">Your giving feeds families, spreads the gospel, and builds the Kingdom in Yerer and beyond.</p>
            
            <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 50px;">
                <a href="#" class="btn-primary" style="background: #C49A6C;"><i class="fas fa-hand-holding-heart"></i> Give Tithe</a>
                <a href="#" class="btn-outline" style="border-color: #C49A6C; color: #C49A6C;">Building Fund</a>
                <a href="#" class="btn-outline" style="border-color: #C49A6C; color: #C49A6C;">Missions</a>
            </div>
            
            <!-- Giving Thermometer -->
            <div style="max-width: 500px; margin: 0 auto;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span>Building Fund Progress</span>
                    <span>$18,500 / $50,000</span>
                </div>
                <div style="background: rgba(255,255,255,0.2); border-radius: 30px; height: 20px; overflow: hidden;">
                    <div style="width: 37%; background: #C49A6C; height: 100%; border-radius: 30px;"></div>
                </div>
                <p style="margin-top: 20px; font-size: 0.9rem;">37% of goal reached. Help us reach $50,000!</p>
            </div>
        </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer style="background: #1a1a1a; color: #999; padding: 60px 0 30px;">
        <div class="container">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-bottom: 40px;">
                
                <div>
                    <h3 style="color: white; margin-bottom: 20px;">Yerer Full Gospel</h3>
                    <p>Worship in Spirit and Truth — John 4:24</p>
                    <div style="margin-top: 20px;">
                        <i class="fab fa-facebook" style="font-size: 1.5rem; margin-right: 15px; color: #C49A6C;"></i>
                        <i class="fab fa-youtube" style="font-size: 1.5rem; margin-right: 15px; color: #C49A6C;"></i>
                        <i class="fab fa-whatsapp" style="font-size: 1.5rem; margin-right: 15px; color: #C49A6C;"></i>
                        <i class="fab fa-telegram" style="font-size: 1.5rem; color: #C49A6C;"></i>
                    </div>
                </div>
                
                <div>
                    <h3 style="color: white; margin-bottom: 20px;">Quick Links</h3>
                    <p><a href="#" style="color: #999; text-decoration: none;">Home</a></p>
                    <p><a href="#" style="color: #999; text-decoration: none;">About Us</a></p>
                    <p><a href="#" style="color: #999; text-decoration: none;">Sermons</a></p>
                    <p><a href="#" style="color: #999; text-decoration: none;">Events</a></p>
                    <p><a href="#" style="color: #999; text-decoration: none;">Give</a></p>
                </div>
                
                <div>
                    <h3 style="color: white; margin-bottom: 20px;">Contact</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Yerer, Ethiopia</p>
                    <p><i class="fas fa-phone"></i> +251-XXX-XXX</p>
                    <p><i class="fas fa-envelope"></i> info@yerergospel.org</p>
                </div>
                
                <div>
                    <h3 style="color: white; margin-bottom: 20px;">Prayer Counter</h3>
                    <div style="font-size: 2rem; font-weight: 700; color: #C49A6C;">347</div>
                    <p>prayers prayed this week</p>
                    <a href="#" style="color: #C49A6C;">Submit prayer request →</a>
                </div>
            </div>
            
            <div style="text-align: center; padding-top: 30px; border-top: 1px solid #333;">
                <p>&copy; 2026 Yerer Full Gospel Believers Church. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Countdown to next Sunday 10 AM
        function updateCountdown() {
            const now = new Date();
            const nextSunday = new Date(now);
            const daysUntilSunday = (7 - now.getDay()) % 7;
            nextSunday.setDate(now.getDate() + daysUntilSunday);
            nextSunday.setHours(10, 0, 0, 0);
            
            if (now > nextSunday) {
                nextSunday.setDate(nextSunday.getDate() + 7);
            }
            
            const diff = nextSunday - now;
            const hours = Math.floor((diff % 86400000) / 3600000);
            const minutes = Math.floor((diff % 3600000) / 60000);
            const seconds = Math.floor((diff % 60000) / 1000);
            
            const countdownElement = document.getElementById('countdown');
            if (countdownElement) {
                countdownElement.innerHTML = 
                    `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
            }
        }
        setInterval(updateCountdown, 1000);
        updateCountdown();
    </script>
</body>
</html>
