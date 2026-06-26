const profiles = {
  p1: {
    img: "assets/images/person1.png",
    role: "หัวหน้าสาขาวิชา",
    name: "ดร.ภูมิ จาตุนิตานนท์",
    degree: "วศ.ด. (วิศวกรรมเครื่องกล)",
    email: "poomjat@pim.ac.th",
    phone: "091-812-1056",
    location: "ชั้น 11 ตึก CP ALL ACADEMY",
    education: [
      "ปริญญาเอก: วศ.ด. (วิศวกรรมเครื่องกล), มหาวิทยาลัยเกษตรศาสตร์, 2560",
      "ปริญญาโท: วศ.ม. (วิศวกรรมเครื่องกล), มหาวิทยาลัยเกษตรศาสตร์, 2553",
      "ปริญญาตรี: วศ.บ. (วิศวกรรมการอาหาร), มหาวิทยาลัยเกษตรศาสตร์, 2551"
    ],
    expertise: [
      "ระบบควบคุม",
      "แบบจำลองทางคณิตศาสตร์"
    ],
    subjects: [
      "Automotive Manufacturing Engineering",
      "Mathematical Modeling",
      "Control System"
    ],
    research: [
      "วิธีกำลังสองน้อยที่สุดสำหรับแบบจำลองทางคณิตศาสตร์ของกลไกหน้าต่างรถยนต์, 2025",
      "Optimizing Tricycle (Tuk-Tuk) Suspension Systems Using Mathematical Modeling, 2025",
      "Reduction of Defective Parts in Air Duct Bracket Production Line using Camera Vision Technology, 2024",
      "การบำรุงรักษาเครื่องจักรเชิงป้องกัน กรณีศึกษา บริษัทผลิตเบาะรถยนต์, 2021",
      "การจำลองวิธีการควบคุมชนิดแบบจำลองอ้างอิงสำหรับการลดความสั่นสะเทือนสำหรับช่วงล่างรถยนต์, 2565"
    ],
    experience: [
      "พ.ศ. 2566 - ปัจจุบัน: หัวหน้าสาขาวิศวกรรมการผลิตยานยนต์ คณะวิศวกรรมศาสตร์และเทคโนโลยี สถาบันการจัดการปัญญาภิวัฒน์",
      "พ.ศ. 2562 - 2566: อาจารย์ผู้รับผิดชอบหลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมการผลิตยานยนต์",
      "พ.ศ. 2553 - 2562: เจ้าหน้าที่ห้องปฏิบัติการ โครงการที่ปรึกษาทางวิศวกรรม มหาวิทยาลัยมหิดล"
    ],
    awards: [
      "รางวัลที่ปรึกษาดีเด่น อันดับ 2 จากคณะวิศวกรรมศาสตร์และเทคโนโลยี ปี 2566",
      "รางวัลอาจารย์ผู้สอนดีเด่น อันดับ 3 จากคณะวิศวกรรมศาสตร์และเทคโนโลยี ปี 2566"
    ]
  },

  p2: {
    img: "assets/images/person2.png",
    role: "อาจารย์ประจำสาขา",
    name: "ผศ.ดร.บัณฑิต อินทรีย์มีศักดิ์",
    degree: "วศ.ด. (วิศวกรรมเครื่องกล)",
    email: "banditins@pim.ac.th",
    phone: "086-666-9129",
    location: "ชั้น 11 ตึก CP ALL ACADEMY",
    education: [
      "ปริญญาเอก: วศ.ด. (วิศวกรรมเครื่องกล), มหาวิทยาลัยเกษตรศาสตร์, 2565",
      "ปริญญาโท: วศ.ม. (วิศวกรรมเครื่องกล), มหาวิทยาลัยเกษตรศาสตร์, 2552",
      "ปริญญาตรี: วศ.บ. (วิศวกรรมเครื่องกล), มหาวิทยาลัยเอเชียอาคเนย์, 2550"
    ],
    expertise: [
      "การซ่อมบำรุงยานยนต์",
      "เครื่องยนต์สันดาปภายใน",
      "การแปรรูปชีวมวล",
      "Biocomposite"
    ],
    subjects: [
      "Automotive Maintenance",
      "Internal Combustion Engine",
      "Manufacturing Process"
    ],
    training: [
      "พื้นฐานเทคโนโลยียานยนต์ไฟฟ้า",
      "Machinery Technology: Middle Size Wheel Loader & Hydraulic Excavator"
    ],
    research: [
      "การปรับปรุงกระบวนการพ่นสีเคลือบป้องกันสนิมใต้ท้องรถยนต์, 2025",
      "Defect Reduction in Automotive Seat Manufacturing: A Lean Six Sigma Approach, 2025",
      "Failure Analysis of S55C Medium Carbon Steel for the Pickup Crankshaft, 2024",
      "Reduction of Defective Parts in Air Duct Bracket Production Line using Camera Vision Technology, 2024"
    ],
    experience: [
      "พ.ศ. 2558 - ปัจจุบัน: อาจารย์ประจำสาขาวิศวกรรมการผลิตยานยนต์ คณะวิศวกรรมศาสตร์และเทคโนโลยี สถาบันการจัดการปัญญาภิวัฒน์",
      "พ.ศ. 2553 - 2558: อาจารย์ประจำสาขาวิศวกรรมเครื่องกล คณะวิศวกรรมศาสตร์ มหาวิทยาลัยธนบุรี"
    ],
    awards: [
      "รางวัลชมเชย นักวิจัยรุ่นใหม่จากเครือข่ายวิจัยประชาชื่น สายวิทยาศาสตร์และเทคโนโลยี พ.ศ. 2562"
    ]
  },

  p3: {
    img: "assets/images/person3.png",
    role: "อาจารย์ประจำสาขา",
    name: "ผศ.ดร.กรีฑา",
    degree: "Doctor of Engineering, Mechanical Engineering",
    email: "kreethasom@pim.ac.th",
    phone: "084-044-3327",
    location: "ชั้น 11 ตึก CP ALL ACADEMY",
    education: [
      "ปริญญาเอก: Doctor of Engineering, Mechanical Engineering, Kasetsart University",
      "ปริญญาโท: Master of Engineering, Mechanical Engineering, Kasetsart University",
      "ปริญญาตรี: Bachelor of Engineering, Mechanical Engineering, Kasetsart University"
    ],
    expertise: [
      "การเขียนแบบวิศวกรรม",
      "กลศาสตร์วิศวกรรม",
      "กลศาสตร์วัสดุ",
      "การออกแบบทางวิศวกรรมเครื่องกล",
      "คอมพิวเตอร์ช่วยการออกแบบการผลิตและวิศวกรรม CAD/CAE"
    ],
    training: [
      "การวิเคราะห์ความแข็งแรงของชิ้นงานด้วยโปรแกรม Patran",
      "การออกแบบและวิเคราะห์ระบบไฮดรอลิกส์เครื่องจักรกลก่อสร้าง LiuGong Machinery Co., Ltd.",
      "การออกแบบและวิเคราะห์ความแข็งแรงของเครื่องจักร Mechanical Engineering Department, Auckland University of Technology"
    ],
    subjects: [
      "Engineering Drawing",
      "Mechanics of Statics and Dynamics",
      "Mechanics of Materials",
      "Mechanical Design",
      "CAD/CAE"
    ],
    research: [
      "Design and Fabrication of Biomass and Municipal Solid Waste Carbonizer",
      "Fertilizer Pellet Production from Filter Cake and Water as a Binder Employing a Flat-Die Pelletizer",
      "Prototyping of Agricultural Purpose Vertical Water Turbine Generator with Adjustable Blade for Small Cannel",
      "Design and Fabrication of Prototyping Automatic Noodle Flavoring Machine",
      "Design and Development of Passenger Lift for Construction Work",
      "Design and Build for Stabilizer Bar Supporting Conveyor"
    ],
    experience: [
      "ยังไม่มีข้อมูลประสบการณ์ในไฟล์"
    ],
    awards: [
      "ยังไม่มีข้อมูลรางวัลในไฟล์"
    ]
  },

  p4: {
    img: "assets/images/person4.png",
    role: "อาจารย์ประจำสาขา",
    name: "ยอดนภา เกษเมือง",
    degree: "วศ.ม. (วิศวกรรมอุตสาหการ)",
    email: "yodnaphaket@pim.ac.th",
    phone: "081-587-2173",
    location: "ชั้น 11 ตึก CP ALL ACADEMY",
    education: [
      "ปริญญาเอก: -",
      "ปริญญาโท: วศ.ม. (วิศวกรรมอุตสาหการ) มหาวิทยาลัยราชมงคลธัญบุรี",
      "ปริญญาตรี: วศ.บ. (วิศวกรรมอุตสาหการ) มหาวิทยาลัยธนบุรี"
    ],
    expertise: [
      "Automation and Process Optimization"
    ],
    training: [
      "โครงการพัฒนาศักยภาพของอาจารย์: การจัดการเรียนการสอนแบบ Active Learning",
      "การบำรุงรักษาทวีผลแบบทุกคนมีส่วนร่วม Total Productive Maintenance",
      "Root Cause Analysis กับการแก้ไขปัญหาอย่างเป็นระบบ"
    ],
    subjects: [
      "Automation",
      "Process Optimization",
      "Quality Improvement",
      "Industrial Engineering"
    ],
    research: [
      "การปรับปรุงกระบวนการพ่นสีเคลือบป้องกันสนิมใต้ท้องรถยนต์, 2025",
      "Defect Reduction in Automotive Seat Manufacturing: A Lean Six Sigma Approach, 2025",
      "Effect on Fatigue Behavior of Connecting Rod in Gasoline Engine, 2024"
    ],
    experience: [
      "พ.ศ. 2547 - 2565: อาจารย์ผู้รับผิดชอบ และหัวหน้าสาขาวิศวกรรมอุตสาหการ มหาวิทยาลัยธนบุรี",
      "พ.ศ. 2566 - ปัจจุบัน: อาจารย์ผู้รับผิดชอบหลักสูตรวิศวกรรมการผลิตยานยนต์ สถาบันการจัดการปัญญาภิวัฒน์"
    ],
    awards: [
      "ยังไม่มีข้อมูลรางวัลในไฟล์"
    ]
  }
};

function setList(id, items){
  const el = document.getElementById(id);
  if (!el) return;

  el.innerHTML = items.map(item => `<li>${item}</li>`).join("");
}

function openProfile(id){
  const p = profiles[id];
  if (!p) return;

  const modal = document.getElementById("profileModal");
  if (!modal) return;

  document.getElementById("modalImg").src = p.img;
  document.getElementById("modalRole").textContent = p.role;
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalDegree").textContent = p.degree;

  const email = document.getElementById("modalEmail");
  email.textContent = p.email;
  email.href = `mailto:${p.email}`;

  setList("modalEducation", p.education);
  setList("modalExpertise", p.expertise);
  setList("modalSubjects", p.subjects);
  setList("modalResearch", p.research);

  modal.classList.add("active");
}

function closeProfile(){
  const modal = document.getElementById("profileModal");
  if (!modal) return;

  modal.classList.remove("active");
}

window.openProfile = openProfile;
window.closeProfile = closeProfile;
