<template>
    <div class="company-intro">
      <main class="intro-content">
        <section class="overview">
          <h2>公司简介</h2>
          <p>
            我们是一家专业从事软件开发和技术服务的公司，专注于通过技术提升企业效率，
            提供高质量的产品和服务，以满足客户多样化的需求。我们致力于成为行业内的
            创新领导者，为全球客户提供定制化的技术解决方案。
          </p>
        </section>
    
        <section class="values">
          <h2>核心价值</h2>
          <ul>
            <li><span class="icon">⭐</span> 客户至上：始终以客户的需求为导向，提供量身定制的解决方案。</li>
            <li><span class="icon">💡</span> 创新驱动：不断探索新技术和解决方案，保持技术领先。</li>
            <li><span class="icon">🤝</span> 团队合作：重视每位员工的贡献，共同创造价值，成就彼此。</li>
          </ul>
        </section>
  
        <section class="vision">
          <h2>我们的愿景</h2>
          <p>
            成为行业领先的技术解决方案提供商，通过持续创新和卓越服务推动客户成功。
            我们相信，未来技术将使世界变得更加智能和便捷，我们将在这场变革中引领潮流。
          </p>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .company-intro {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #333;
    text-align: center;
    padding: 0 20px;
  }
  
  .intro-header {
    background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
    padding: 60px 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .intro-header h1 {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #004085;
  }
  
  .intro-header p {
    font-size: 18px;
    color: #6c757d;
  }
  
  .intro-content {
    margin-top: 40px;
  }
  
  .overview, .values, .vision {
    margin-bottom: 30px;
    padding: 20px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  }
  
  .overview:hover, .values:hover, .vision:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  .overview h2, .values h2, .vision h2 {
    font-size: 26px;
    margin-bottom: 15px;
    color: #007bff;
  }
  
  .overview p, .vision p {
    font-size: 16px;
    color: #495057;
  }
  
  .values ul {
    list-style: none;
    padding: 0;
    text-align: left;
  }
  
  .values li {
    font-size: 16px;
    color: #495057;
    margin-bottom: 15px;
    padding-left: 25px;
    position: relative;
    line-height: 1.8;
  }
  
  .values li:before {
    content: '\2022';
    color: #007bff;
    position: absolute;
    left: 0;
    font-size: 22px;
  }
  
  .values .icon {
    color: #007bff;
    font-size: 20px;
    margin-right: 10px;
  }
  
  .intro-footer {
    margin-top: 40px;
    padding: 20px 0;
    font-size: 14px;
    color: #adb5bd;
    border-top: 1px solid #dee2e6;
  }
  
  /* 添加页面加载动画 */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .intro-content {
    animation: fadeIn 1s ease-in-out;
  }
  </style>
  