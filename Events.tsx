<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Give & Events · Yerer Full Gospel</title>
  <meta name="description" content="Support the ministry and join our events at Yerer Full Gospel Church." />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', sans-serif;
      background: #FCF8F0;
      color: #1F1A14;
      line-height: 1.7;
      scroll-behavior: smooth;
    }
    h1, h2, h3, .logo { font-family: 'Playfair Display', serif; }
    .container { max-width: 1280px; margin: 0 auto; padding: 0 28px; }
    .btn-primary {
      display: inline-block;
      background: #B58B5C;
      color: white;
      padding: 14px 38px;
      border-radius: 60px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      box-shadow: 0 8px 24px rgba(181, 139, 92, 0.35);
      letter-spacing: 0.3px;
    }
    .btn-primary:hover { background: #9F7349; transform: translateY(-3px); box-shadow: 0 14px 34px rgba(181, 139, 92, 0.45); }
    .btn-secondary {
      display: inline-block;
      background: transparent;
      color: #B58B5C;
      padding: 14px 38px;
      border-radius: 60px;
      text-decoration: none;
      font-weight: 600;
      border: 2px solid #B58B5C;
      transition: all 0.3s ease;
    }
    .btn-secondary:hover { background: #B58B5C; color: white; transform: translateY(-2px); }
    .section-title {
      text-align: center;
      font-size: 2.8rem;
      margin-bottom: 12px;
      color: #1F1A14;
      letter-spacing: -0.5px;
    }
    .section-title span { color: #B58B5C; }
    .section-subtitle {
      text-align: center;
      color: #6B5E4E;
      margin-bottom: 56px;
      font-size: 1.15rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    .card {
      background: #FFFFFF;
      border-radius: 28px;
      padding: 36px 28px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.04);
      transition: all 0.35s ease;
      border: 1px solid rgba(181, 139, 92, 0.06);
    }
    .card:hover { transform: translateY(-8px); box-shadow: 0 24px 60px rgba(0,0,0,0.08); }
    .pill-badge { background: rgba(181,139,92,0.12); padding: 6px 22px; border-radius: 60px; font-size: 0.75rem; letter-spacing: 1px; color: #B58B5C; font-weight: 600; }
    .progress-bar-bg { background: rgba(255,255,255,0.08); border-radius: 40px; height: 18px; overflow: hidden; box-shadow: inset 0 2px 4px rgba(0,0,0,0.2); }
    .progress-fill { background: linear-gradient(90deg, #B58B5C, #D4A574); height: 100%; border-radius: 40px; transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
    .event-card {
      background: white;
      border-radius: 28px;
      padding: 28px;
      border-left: 6px solid #B58B5C;
      box-shadow: 0 8px 24px rgba(0,0,0,0.02);
      transition: all 0.3s;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 20px;
    }
    .event-card:hover { transform: translateX(6px); box-shadow: 0 16px 40px rgba(0,0,0,0.06); }
    .event-date {
      background: #F8F4EC;
      border-radius: 20px;
      padding: 16px 20px;
      text-align: center;
      min-width: 80px;
    }
    .event-date .day { font-size: 2.2rem; font-weight: 800; color: #B58B5C; line-height: 1; }
    .event-date .month { font-size: 0.8rem; text-transform: uppercase; color: #6B5E4E; letter-spacing: 1px; }
    .give-option {
      background: #F8F4EC;
      border-radius: 28px;
      padding: 32px 24px;
      text-align: center;
      transition: all 0.3s;
    }
    .give-option:hover { background: #EFE8DC; transform: translateY(-6px); }
    .give-option i { font-size: 2.8rem; color: #B58B5C; margin-bottom: 12px; }
    @media (max-width: 768px) {
      .section-title { font-size: 2rem; }
      .container { padding: 0 16px; }
      nav .container { flex-direction: column; gap: 12px; }
      .event-card { flex-direction: column; align-items: stretch; }
    }
  </style>
</head>
<body>
<!-- ===== NAVIGATION ===== -->
<nav style="background: rgba(255,255,255,0.94); backdrop-filter: blur(14px); box-shadow: 0 4px 24px rgba(0,0,0,0.03); position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid rgba(181,139,92,0.12);">
  <div class="container" style="display: flex; justify-content: space-between; align-items: center; padding: 14px 24px; flex-wrap: wrap;">
    <a href="index.html" style="text-decoration: none; display: flex; align-items: center; gap: 12px;">
      <img src="logo.jpg" alt="Logo" style="height: 48px; width: auto; border-radius: 8px;" />
      <div>
        <div style="font-size: 1.1rem; font-weight: 800; color: #B58B5C; line-height: 1.15; font-family: 'Playfair Display', serif;">የረር ሙሉወንጌል ቤተክርስቲያን</div>
        <div style="font-size: 0.6rem; letter-spacing: 2px; color: #6B5E4E; font-weight: 500;">YERER FULL GOSPEL BELIEVERS CHURCH</div>
      </div>
    </a>
    <div style="display: flex; gap: 28px; flex-wrap: wrap; align-items: center;">
      <a href="index.html" style="text-decoration: none; color: #1F1A14; font-weight: 500; transition: color 0.2s;">Home</a>
      <a href="about.html" style="text-decoration: none; color: #1F1A14; font-weight: 500; transition: color 0.2s;">About</a>
      <a href="sermons.html" style="text-decoration: none; color: #1F1A14; font-weight: 500; transition: color 0.2s;">Sermons</a>
      <a href="events.html" style="text-decoration: none; color: #B58B5C; font-weight: 600; border-bottom: 2px solid #B58B5C; padding-bottom: 4px;">Events</a>
      <a href="give.html" style="text-decoration: none; color: #B58B5C; font-weight: 600; border-bottom: 2px solid #B58B5C; padding-bottom: 4px;">Give</a>
      <a href="#" class="btn-primary" style="padding: 10px 28px; font-size: 0.9rem;">Join Live <i class="fas fa-arrow-right" style="margin-left: 8px;"></i></a>
    </div>
  </div>
</nav>
