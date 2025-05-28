import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Blog() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section
      id="Blog"
      className="sm:mt-40 flex flex-col justify-center items-center min-h-screen w-full  text-white "
      data-aos="fade-up "
    >
      <div className="flex flex-col justify-center items-center  ">
        <div className="text-6xl ">BLOG</div>
        <div className="text-3xl py-10">
          <p> Here's a list of technologies I've worked with</p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-col-2 flex-wrap justify-center "
      >
        
        <div className="  focus:scale-110 hover:scale-110 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-violet-500 border border-gray-700 rounded-lg  mx-5 my-5 ">
          <div className="bg-gray-900 w-80 rounded-lg flex flex-col">
            <div className="flex p-2 gap-2 justify-start">
              <div>
                <span className="bg-red-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
              <div>
                <span className="bg-yellow-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
              <div>
                <span className="bg-green-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-2">
              <div className="overflow-hidden break-words">
                <h1 className="text-2xl text-violet-500 mb-4">Photography</h1>
                <p className="text-white">ระบบจัดการและแสดงผลผลงานภาพถ่าย สำหรับช่างภาพหรือผู้รักการถ่ายภาพ ระบบช่วยให้สามารถจัดเก็บ แสดง แบ่งปันผลงานภาพถ่ายได้อย่างมีประสิทธิภาพง่าย</p>
                <div className="mt-4">
                  <div className="inline-block px-4 py-1 bg-purple-700 text-white rounded-full text-sm font-medium shadow">
                  PHP
                </div>{" "}
                
                 <div className="inline-block px-4 py-1 bg-purple-700 text-white rounded-full text-sm font-medium shadow">
                  MySQL
                </div>
                </div>
              </div>
              <div className="justify-end flex mt-4">
                <button
                  className="flex items-center gap-2 text-violet-500"
                  onClick={() =>
                    window.open(
                      "https://18percentgrey.infinityfreeapp.com/",
                      "_blank"
                    )
                  }
                >
                  {/* ไอคอน */}
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="  focus:scale-110 hover:scale-110 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-violet-500 border border-gray-700 rounded-lg  mx-5 my-5 ">
          <div className="bg-gray-900 w-80 rounded-lg flex flex-col">
            <div className="flex p-2 gap-2 justify-start">
              <div>
                <span className="bg-red-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
              <div>
                <span className="bg-yellow-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
              <div>
                <span className="bg-green-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-2">
              <div className="overflow-hidden break-words">
                <h1 className="text-2xl text-violet-500 mb-4">POS</h1>
                <p className="text-white">
                  ระบบ (POS) ที่ช่วยจัดการการขายสินค้า คลังสินค้า
                  ผู้ใช้งาน และรายงานยอดขาย
                  รองรับการจัดการผ่านสิทธิ์ของผู้ดูแลและพนักงาน
                  ใช้งานง่ายและมีระบบบันทึกรายการแบบเรียลไทม์
                </p>
                <div className="mt-4">
                  <div className="inline-block px-4 py-1 bg-purple-700 text-white rounded-full text-sm font-medium shadow">
                  PHP
                </div>{" "}
                <div className="inline-block px-4 py-1 bg-purple-700 text-white rounded-full text-sm font-medium shadow">
                  AJAX
                </div>
                 <div className="inline-block px-4 py-1 bg-purple-700 text-white rounded-full text-sm font-medium shadow">
                  MySQL
                </div>
                </div>
              </div>
              <div className="justify-end flex mt-4">
                <button
                  className="flex items-center gap-2 text-violet-500"
                  onClick={() =>
                    window.open("http://postest.wuaze.com/", "_blank")
                  }
                >
                  {/* ไอคอน */}
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="  focus:scale-110 hover:scale-110 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-violet-500 border border-gray-700 rounded-lg  mx-5 my-5 ">
          <div className="bg-gray-900 w-80 rounded-lg flex flex-col">
            <div className="flex p-2 gap-2 justify-start">
              <div>
                <span className="bg-red-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
              <div>
                <span className="bg-yellow-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
              <div>
                <span className="bg-green-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-2">
              <div className="overflow-hidden break-words">
                <h1 className="text-2xl text-violet-500 mb-4">Helpdesk</h1>
                <p className="text-white">
                  ระบบ Helpdesk สำหรับองค์กรหรือหน่วยงาน ใช้ในการจัดการแจ้งปัญหา
                  ระหว่างผู้ใช้งานกับผู้ดูแลระบบ สามารถติดตามสถานะ ตอบกลับ และอัปเดตการดำเนินงานได้แบบเรียลไทม์
                </p>
                <div className="mt-4">
                  <div className="inline-block px-4 py-1 bg-purple-700 text-white rounded-full text-sm font-medium shadow">
                  PHP
                </div>{" "}
                <div className="inline-block px-4 py-1 bg-purple-700 text-white rounded-full text-sm font-medium shadow">
                  AJAX
                </div>
                 <div className="inline-block px-4 py-1 bg-purple-700 text-white rounded-full text-sm font-medium shadow">
                  MySQL
                </div>
                </div>
              </div>
              <div className="justify-end flex mt-4">
                <button
                  className="flex items-center gap-2 text-violet-500"
                  onClick={() =>
                    window.open("http://systemhelpdesk.wuaze.com/", "_blank")
                  }
                >
                  {/* ไอคอน */}
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="  focus:scale-110 hover:scale-110 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-violet-500 border border-gray-700 rounded-lg  mx-5 my-5 ">
          <div className="bg-gray-900 w-80 rounded-lg flex flex-col">
            <div className="flex p-2 gap-2 justify-start">
              <div>
                <span className="bg-red-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
              <div>
                <span className="bg-yellow-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
              <div>
                <span className="bg-green-500 inline-block w-3 h-3 rounded-full"></span>
              </div>
            </div>

            <div className="flex flex-col gap-2 p-2">
              <div className="overflow-hidden break-words">
                <h1 className="text-2xl text-violet-500 mb-4">Portfolio</h1>
                <p className="text-white">ระบบ Portfolio ออนไลน์ส่วนตัว สำหรับใช้แสดงประวัติส่วนตัว ทักษะ และผลงานต่าง ๆ ที่เคยทำ โดยออกแบบให้แสดงข้อมูลอย่างเป็นระบบ</p>
                <div className="mt-4">
                  <div className="inline-block px-4 py-1 bg-purple-700 text-white rounded-full text-sm font-medium shadow">
                  React
                </div>
                
                </div>
              </div>
              <div className="justify-end flex mt-4">
                <button
                  className="flex items-center gap-2 text-violet-500"
                  onClick={() =>
                    window.open("https://portfolio-zeta-three-19.vercel.app/", "_blank")
                  }
                >
                  {/* ไอคอน */}
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
