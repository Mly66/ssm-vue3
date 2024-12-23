<template>
    <div class="employee-motivation">
      <main class="motivation-content">
        <section class="inspiration">
          <h2>加薪秘籍</h2>
          <p>
            我们深信，每位员工都是公司成功的关键。为了帮助大家成长并取得更大的成就，
            我们提供充足的资源和支持，让每位员工都能在个人和职业上实现最佳发展。
          </p>
        </section>
  
        <section class="growth-opportunities">
          <h2>成长机会</h2>
          <ul>
            <li><span class="icon">🚀</span> 持续学习：我们鼓励员工通过培训、课程和知识分享不断提升自我。</li>
            <li><span class="icon">💼</span> 职业发展：通过定期的职业规划讨论，帮助员工规划长远职业发展。</li>
            <li><span class="icon">🏆</span> 成就认可：我们为优秀的员工提供奖励和晋升机会，表彰他们的努力和贡献。</li>
          </ul>
        </section>
  
        <section class="team-spirit">
          <h2>团队精神</h2>
          <p>
            我们相信，团队合作是成功的基础。每个人的贡献都值得尊重，携手共进，才能创造更大的价值。
          </p>
        </section>
  
        <section class="success-stories">
          <h2>成功案例</h2>
          <p>
            让我们一起分享公司内部员工的成功故事，从中汲取力量，激发前进的动力。每一个成功的背后，都是努力和坚持。
          </p>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .employee-motivation {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #333;
    text-align: center;
    padding: 0 20px;
  }
  
  .motivation-content {
    margin-top: 40px;
  }
  
  .inspiration, .growth-opportunities, .team-spirit, .success-stories {
    margin-bottom: 30px;
    padding: 20px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  }
  
  .inspiration:hover, .growth-opportunities:hover, .team-spirit:hover, .success-stories:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  .inspiration h2, .growth-opportunities h2, .team-spirit h2, .success-stories h2 {
    font-size: 26px;
    margin-bottom: 15px;
    color: #007bff;
  }
  
  .inspiration p, .team-spirit p, .success-stories p {
    font-size: 16px;
    color: #495057;
  }
  
  .growth-opportunities ul {
    list-style: none;
    padding: 0;
    text-align: left;
  }
  
  .growth-opportunities li {
    font-size: 16px;
    color: #495057;
    margin-bottom: 15px;
    padding-left: 25px;
    position: relative;
    line-height: 1.8;
  }
  
  .growth-opportunities li:before {
    content: '\2022';
    color: #007bff;
    position: absolute;
    left: 0;
    font-size: 22px;
  }
  
  .growth-opportunities .icon {
    color: #007bff;
    font-size: 20px;
    margin-right: 10px;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .motivation-content {
    animation: fadeIn 1s ease-in-out;
  }
  </style>
  