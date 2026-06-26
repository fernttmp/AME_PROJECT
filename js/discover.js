// Discover Your Future form helper
// Adds proper behavior without changing your HTML.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".career-open-form");
  if (!form) return;

  const questionGroups = form.querySelectorAll(".choice-question");
  questionGroups.forEach((group, groupIndex) => {
    group.querySelectorAll('input[type="radio"]').forEach((input) => {
      input.name = input.name || `q${groupIndex + 1}`;
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = document.querySelector(".result-preview");
    if (result) {
      result.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});






document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      text: "อะไรคือสิ่งที่คุณสนใจมากที่สุด?",
      answers: [
        { text: "🚗 เทคโนโลยียานยนต์", score: 30, tags: ["สนใจเทคโนโลยียานยนต์"] },
        { text: "⚡ รถยนต์ไฟฟ้า (EV)", score: 32, tags: ["สนใจรถยนต์ไฟฟ้า"] },
        { text: "🤖 หุ่นยนต์และระบบอัตโนมัติ", score: 31, tags: ["สนใจระบบอัตโนมัติ"] },
        { text: "🏭 โรงงานอัจฉริยะ", score: 30, tags: ["สนใจอุตสาหกรรมสมัยใหม่"] }
      ]
    },
    {
      text: "คุณชอบการเรียนแบบไหน?",
      answers: [
        { text: "🔧 ได้ลงมือทำจริง", score: 32, tags: ["ชอบการลงมือปฏิบัติจริง"] },
        { text: "🧠 ได้คิดและแก้ปัญหา", score: 30, tags: ["มีแนวคิดเชิงวิเคราะห์"] },
        { text: "👥 ได้ทำงานร่วมกับเพื่อน", score: 25, tags: ["ทำงานร่วมกับผู้อื่นได้ดี"] },
        { text: "💡 ได้สร้างสรรค์สิ่งใหม่", score: 28, tags: ["มีความคิดสร้างสรรค์"] }
      ]
    },
    {
      text: "ถ้ามีอุปกรณ์เสียอยู่ตรงหน้า คุณจะทำอย่างไร?",
      answers: [
        { text: "🔍 ลองหาสาเหตุ", score: 31, tags: ["ชอบวิเคราะห์หาสาเหตุของปัญหา"] },
        { text: "🛠️ ทดลองแก้ไข", score: 30, tags: ["กล้าทดลองและลงมือแก้ปัญหา"] },
        { text: "🤝 ขอคำแนะนำจากคนอื่น", score: 24, tags: ["เปิดรับคำแนะนำและทำงานเป็นทีม"] },
        { text: "📖 ศึกษาวิธีก่อนลงมือทำ", score: 28, tags: ["มีความรอบคอบก่อนลงมือปฏิบัติ"] }
      ]
    },
    {
      text: "ถ้ามีโปรเจกต์ให้ทำ คุณอยากทำเรื่องอะไร?",
      answers: [
        { text: "🚗 พัฒนายานยนต์แห่งอนาคต", score: 31, tags: ["สนใจยานยนต์แห่งอนาคต"] },
        { text: "🤖 สร้างระบบอัตโนมัติ", score: 32, tags: ["สนใจ Automation"] },
        { text: "🏭 พัฒนาโรงงานอัจฉริยะ", score: 30, tags: ["สนใจ Smart Manufacturing"] },
        { text: "⚡ พัฒนาเทคโนโลยีพลังงานสะอาด", score: 29, tags: ["สนใจพลังงานสะอาดและ EV"] }
      ]
    },
    {
      text: "เวลาทำงาน คุณชอบทำหน้าที่แบบไหน?",
      answers: [
        { text: "🔧 ลงมือปฏิบัติ", score: 31, tags: ["เหมาะกับการเรียนรู้ภาคปฏิบัติ"] },
        { text: "🧠 วางแผนและแก้ปัญหา", score: 30, tags: ["มีทักษะการวางแผนและแก้ปัญหา"] },
        { text: "💡 คิดไอเดียใหม่ ๆ", score: 27, tags: ["มีแนวคิดพัฒนาและสร้างสรรค์"] },
        { text: "👥 ประสานงานกับทีม", score: 24, tags: ["มีทักษะการทำงานร่วมกับผู้อื่น"] }
      ]
    },
    {
      text: "คุณอยากมีส่วนร่วมกับอะไรในอนาคต?",
      answers: [
        { text: "🚘 ยานยนต์แห่งอนาคต", score: 31, tags: ["สนใจอุตสาหกรรมยานยนต์"] },
        { text: "⚡ พลังงานสะอาด", score: 29, tags: ["สนใจเทคโนโลยีพลังงานสะอาด"] },
        { text: "🏭 อุตสาหกรรม 4.0", score: 32, tags: ["สนใจอุตสาหกรรม 4.0"] },
        { text: "🌎 เทคโนโลยีระดับโลก", score: 28, tags: ["มีเป้าหมายในอุตสาหกรรมอนาคต"] }
      ]
    },
    {
      text: "กิจกรรมแบบไหนที่คุณชอบมากที่สุด?",
      answers: [
        { text: "🔧 ประกอบหรือทดลองใช้อุปกรณ์", score: 32, tags: ["ชอบทดลองและใช้อุปกรณ์จริง"] },
        { text: "💻 เรียนรู้เทคโนโลยีใหม่ ๆ", score: 29, tags: ["สนใจเรียนรู้เทคโนโลยีใหม่"] },
        { text: "📊 วิเคราะห์และวางแผน", score: 28, tags: ["มีทักษะด้านการวิเคราะห์"] },
        { text: "🤝 ทำงานร่วมกับผู้อื่น", score: 24, tags: ["ทำงานเป็นทีมได้ดี"] }
      ]
    },
    {
      text: "จุดเด่นของตัวเองคืออะไร?",
      answers: [
        { text: "🧠 คิดวิเคราะห์ได้ดี", score: 30, tags: ["มีจุดเด่นด้านการคิดวิเคราะห์"] },
        { text: "🔧 ชอบลงมือทำ", score: 32, tags: ["มีจุดเด่นด้านการปฏิบัติ"] },
        { text: "💡 มีความคิดสร้างสรรค์", score: 27, tags: ["มีความคิดสร้างสรรค์"] },
        { text: "👥 ทำงานร่วมกับผู้อื่นได้ดี", score: 25, tags: ["มีทักษะการทำงานร่วมกัน"] }
      ]
    },
    {
      text: "ถ้ามีเทคโนโลยีใหม่ออกมา คุณจะ...",
      answers: [
        { text: "😍 อยากลองใช้ทันที", score: 30, tags: ["เปิดรับเทคโนโลยีใหม่"] },
        { text: "🤔 ศึกษาข้อมูลเพิ่มเติม", score: 28, tags: ["สนใจเรียนรู้เชิงลึก"] },
        { text: "👀 ติดตามความเปลี่ยนแปลง", score: 26, tags: ["ติดตามเทคโนโลยีสมัยใหม่"] },
        { text: "🛠️ อยากรู้ว่าเบื้องหลังทำงานอย่างไร", score: 32, tags: ["สนใจหลักการทำงานของเทคโนโลยี"] }
      ]
    },
    {
      text: "อะไรคือเหตุผลที่ทำให้คุณสนใจ AME?",
      answers: [
        { text: "🚗 ชอบเทคโนโลยียานยนต์", score: 32, tags: ["สนใจเทคโนโลยียานยนต์"] },
        { text: "⚡ สนใจรถยนต์ไฟฟ้า", score: 31, tags: ["สนใจ EV"] },
        { text: "🤖 สนใจระบบอัตโนมัติ", score: 31, tags: ["สนใจระบบ Automation"] },
        { text: "🌎 อยากทำงานในอุตสาหกรรมแห่งอนาคต", score: 29, tags: ["มีเป้าหมายในอุตสาหกรรมอนาคต"] }
      ]
    }
  ];

  const form = document.getElementById("careerForm");
  const container = document.getElementById("questionContainer");

  const percent = document.getElementById("matchPercent");
  const title = document.getElementById("careerTitle");
  const description = document.getElementById("careerDescription");
  const reasonList = document.getElementById("reasonList");
  const careerList = document.getElementById("careerList");

  if (!form || !container) return;

  const selectedQuestions = [...questions]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  container.innerHTML = selectedQuestions.map((q, index) => {
    const answers = q.answers.map((a, answerIndex) => `
      <label>
        <input type="radio" name="q${index}" value="${answerIndex}">
        ${a.text}
      </label>
    `).join("");

    return `
      <div class="choice-question">
        <h4>${index + 1}. ${q.text}</h4>
        ${answers}
      </div>
    `;
  }).join("");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedAnswers = [];

    selectedQuestions.forEach((q, index) => {
      const checked = document.querySelector(`input[name="q${index}"]:checked`);
      if (checked) {
        selectedAnswers.push(q.answers[Number(checked.value)]);
      }
    });

    if (selectedAnswers.length < 3) {
      alert("กรุณาตอบคำถามให้ครบ 3 ข้อ");
      return;
    }

    form.classList.add("ai-analyzing");
    percent.textContent = "0%";
    title.textContent = "AI กำลังประมวลผล";
    description.textContent = "ระบบกำลังวิเคราะห์ความสนใจ ทักษะ และแนวโน้มที่เหมาะกับสาขา AME";
    reasonList.innerHTML = "<li>กำลังประมวลผลคำตอบ...</li>";
    careerList.innerHTML = "<li>กำลังสร้างเส้นทางอาชีพที่เหมาะสม...</li>";

    setTimeout(() => {
      const rawScore = selectedAnswers.reduce((sum, item) => sum + item.score, 0);
      const finalScore = Math.min(98, Math.max(62, rawScore));

      const tags = [...new Set(selectedAnswers.flatMap(item => item.tags))];

      let level = "ปานกลาง";
      if (finalScore >= 90) level = "สูงมาก";
      else if (finalScore >= 80) level = "สูง";
      else if (finalScore >= 70) level = "ค่อนข้างเหมาะสม";

      let careers = [
        "⚙️ Manufacturing Engineer",
        "🏭 Production Engineer",
        "📊 Quality Engineer"
      ];

      const tagText = tags.join(" ");

      if (tagText.includes("EV") || tagText.includes("รถยนต์ไฟฟ้า") || tagText.includes("พลังงาน")) {
        careers = [
          "⚡ EV Engineer",
          "🔋 Battery Technology Engineer",
          "🚗 Automotive Engineer"
        ];
      } else if (tagText.includes("Automation") || tagText.includes("อัตโนมัติ") || tagText.includes("หุ่นยนต์")) {
        careers = [
          "🤖 Automation Engineer",
          "🦾 Robotics Engineer",
          "🏭 Smart Factory Engineer"
        ];
      } else if (tagText.includes("ผลิต") || tagText.includes("โรงงาน") || tagText.includes("อุตสาหกรรม")) {
        careers = [
          "⚙️ Manufacturing Engineer",
          "🏭 Production Engineer",
          "📊 Process Improvement Engineer"
        ];
      }

      percent.textContent = `${finalScore}%`;
      title.innerHTML = `คุณมีความเหมาะสมกับการเรียน<br>สาขา AME`;
      description.textContent =
        `ระดับความเหมาะสม: ${level} — คุณมีแนวโน้มเหมาะกับการเรียนสาขาวิศวกรรมการผลิตยานยนต์ เพราะคำตอบของคุณสะท้อนความสนใจด้านเทคโนโลยี วิศวกรรม และอุตสาหกรรมสมัยใหม่`;

      reasonList.innerHTML = tags
        .slice(0, 4)
        .map(tag => `<li>✔ ${tag}</li>`)
        .join("");

      careerList.innerHTML = careers
        .map(career => `<li>${career}</li>`)
        .join("");

      form.classList.remove("ai-analyzing");
    }, 1200);
  });
});
