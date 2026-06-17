import svgPaths from "./svg-fv35egdipq";

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[53px] p-[10px] top-[19px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Track</p>
    </div>
  );
}

function Select() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Select">
      <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[6px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-none min-w-px not-italic relative text-[#1e1e1e] text-[16px]">Sep</p>
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
              <div className="absolute inset-[-20%_-10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 5.6">
                  <path d="M0.8 0.8L4.8 4.8L8.8 0.8" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Select1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Select">
      <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[6px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-none min-w-px not-italic relative text-[#1e1e1e] text-[16px]">2025</p>
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
              <div className="absolute inset-[-20%_-10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6 5.6">
                  <path d="M0.8 0.8L4.8 4.8L8.8 0.8" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Block() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full z-[2]" data-name="Block">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[32px] shrink-0" data-name="Icon Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Chevron left">
          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
            <div className="absolute inset-[-10%_-20%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                <path d="M6 11L1 6L6 1" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[8px] isolate items-start min-w-px relative" data-name="Calendar Select Group">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative z-[2]" data-name="Calendar Month Field">
          <Select />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative z-[1]" data-name="Calendar Year Field">
          <Select1 />
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[32px] shrink-0" data-name="Icon Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Chevron right">
          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
            <div className="absolute inset-[-10%_-20%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                <path d="M1 11L6 6L1 1" id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Td() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Td">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Su</p>
      </div>
    </div>
  );
}

function Td1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Td">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Mo</p>
      </div>
    </div>
  );
}

function Td2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Td">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Tu</p>
      </div>
    </div>
  );
}

function Td3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Td">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">We</p>
      </div>
    </div>
  );
}

function Td4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Td">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Th</p>
      </div>
    </div>
  );
}

function Td5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Td">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Fr</p>
      </div>
    </div>
  );
}

function Td6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Td">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Sa</p>
      </div>
    </div>
  );
}

function Thead() {
  return (
    <div className="content-stretch flex gap-px items-center justify-center relative shrink-0 w-full" data-name="Thead">
      <Td />
      <Td1 />
      <Td2 />
      <Td3 />
      <Td4 />
      <Td5 />
      <Td6 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 z-[5]" data-name="Row">
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button" />
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">1</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">2</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">3</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">4</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">5</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">6</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 z-[4]" data-name="Row">
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">7</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">8</p>
        </div>
      </div>
      <div className="bg-[#2c2c2c] content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f5f5f5] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">9</p>
        </div>
      </div>
      <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2c2c2c] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">10</p>
        </div>
      </div>
      <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2c2c2c] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">11</p>
        </div>
      </div>
      <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2c2c2c] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">12</p>
        </div>
      </div>
      <div className="bg-[#2c2c2c] content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f5f5f5] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">13</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 z-[3]" data-name="Row">
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">14</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">15</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">16</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">17</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">18</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">19</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">20</p>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 z-[2]" data-name="Row">
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">21</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">22</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">23</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">24</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">25</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">26</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">27</p>
        </div>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 z-[1]" data-name="Row">
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">28</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">29</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">30</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b3b3b3] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">1</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b3b3b3] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">2</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b3b3b3] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">3</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Calendar Button">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b3b3b3] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[1.4]">4</p>
        </div>
      </div>
    </div>
  );
}

function Tbody() {
  return (
    <div className="content-stretch flex flex-col gap-px isolate items-center relative shrink-0" data-name="Tbody">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[16px] relative shrink-0 z-[1]" data-name="Table">
      <Thead />
      <Tbody />
    </div>
  );
}

function FillShadow() {
  return (
    <div className="absolute inset-0 rounded-[296px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.12)]" data-name="Fill + Shadow">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[296px]">
        <div className="absolute bg-[rgba(255,255,255,0.65)] inset-0 rounded-[296px]" />
        <div className="absolute bg-[#ddd] inset-0 mix-blend-color-burn rounded-[296px]" />
        <div className="absolute bg-[#f7f7f7] inset-0 mix-blend-darken rounded-[296px]" />
      </div>
    </div>
  );
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[296px]" data-name="Glass Effect" />;
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[53px] p-[10px] top-[19px]">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">Track</p>
    </div>
  );
}

function Chart() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[352px] left-[-36px] overflow-clip top-[446px] w-[494px]" data-name="Chart">
      <div className="absolute inset-[88.47%_10%_11.53%_15%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370.5 1">
            <path d="M0 0.5H370.5" id="Vector" stroke="var(--stroke-0, #DBDEE4)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[75.61%_10%_24.39%_15%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370.5 1">
            <path d="M0 0.5H370.5" id="Vector" stroke="var(--stroke-0, #DBDEE4)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.74%_10%_37.26%_15%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370.5 1">
            <path d="M0 0.5H370.5" id="Vector" stroke="var(--stroke-0, #DBDEE4)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[50.12%_10%_49.88%_15%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370.5 1">
            <path d="M0 0.5H370.5" id="Vector" stroke="var(--stroke-0, #DBDEE4)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.26%_10%_62.74%_15%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370.5 1">
            <path d="M0 0.5H370.5" id="Vector" stroke="var(--stroke-0, #DBDEE4)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[24.39%_10%_75.61%_15%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370.5 1">
            <path d="M0 0.5H370.5" id="Vector" stroke="var(--stroke-0, #DBDEE4)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[11.77%_10%_88.23%_15%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 370.5 1">
            <path d="M0 0.5H370.5" id="Vector" stroke="var(--stroke-0, #DBDEE4)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[88.47%_10%_11.53%_15%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-0.13%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.5 1">
            <path d="M0.5 0.5H371" id="Vector" stroke="var(--stroke-0, #54555A)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[86.65%_86.66%_9.71%_11.69%] leading-[normal] not-italic text-[#54555a] text-[12px] text-right">0</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[73.87%_86.66%_22.49%_11.69%] leading-[normal] not-italic text-[#54555a] text-[12px] text-right">3</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[61.08%_86.66%_35.28%_11.69%] leading-[normal] not-italic text-[#54555a] text-[12px] text-right">6</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[48.3%_86.66%_48.06%_11.69%] leading-[normal] not-italic text-[#54555a] text-[12px] text-right">9</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[35.52%_86.66%_60.84%_10.65%] leading-[normal] not-italic text-[#54555a] text-[12px] text-right">12</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[22.73%_86.66%_73.62%_10.65%] leading-[normal] not-italic text-[#54555a] text-[12px] text-right">15</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[9.95%_86.66%_86.41%_10.65%] leading-[normal] not-italic text-[#54555a] text-[12px] text-right">18</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.81%_77.05%_6.55%_17.77%] leading-[normal] not-italic text-[#54555a] text-[12px] text-center">Mon</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.81%_66.75%_6.55%_28.9%] leading-[normal] not-italic text-[#54555a] text-[12px] text-center">Tue</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.81%_55.52%_6.55%_39.09%] leading-[normal] not-italic text-[#54555a] text-[12px] text-center">Wed</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.81%_45.22%_6.55%_50.22%] leading-[normal] not-italic text-[#54555a] text-[12px] text-center">Thu</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.81%_35.23%_6.55%_61.66%] leading-[normal] not-italic text-[#54555a] text-[12px] text-center">Fri</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.81%_24.1%_6.55%_71.96%] leading-[normal] not-italic text-[#54555a] text-[12px] text-center">Sat</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[89.81%_13.08%_6.55%_82.37%] leading-[normal] not-italic text-[#54555a] text-[12px] text-center">Sun</p>
      <div className="absolute inset-[45.74%_75.95%_11.65%_16.66%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.5207 149.989">
          <path d={svgPaths.p30518800} fill="url(#paint0_linear_1_2041)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2041" x1="0" x2="41.3533" y1="0" y2="-5.81337">
              <stop stopColor="#7B2F00" />
              <stop offset="0.649038" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[62.78%_65.23%_11.65%_27.38%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.5206 89.9935">
          <path d={svgPaths.p193fc000} fill="url(#paint0_linear_1_2063)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2063" x1="0" x2="39.9759" y1="0" y2="-9.36622">
              <stop stopColor="#7B2F00" />
              <stop offset="0.649038" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[28.69%_54.52%_11.65%_38.09%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.5207 209.985">
          <path d={svgPaths.p50750c0} fill="url(#paint0_linear_1_2065)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2065" x1="0" x2="41.7495" y1="0" y2="-4.1922">
              <stop stopColor="#7B2F00" />
              <stop offset="0.649038" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[37.22%_43.8%_11.65%_48.8%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.5207 179.987">
          <path d={svgPaths.p5b41e00} fill="url(#paint0_linear_1_2047)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2047" x1="0" x2="41.5996" y1="0" y2="-4.87334">
              <stop stopColor="#7B2F00" />
              <stop offset="0.649038" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[11.65%_33.09%_11.65%_59.52%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.5207 269.981">
          <path d={svgPaths.p27a878c0} fill="url(#paint0_linear_1_2039)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2039" x1="0" x2="41.9148" y1="0" y2="-3.27351">
              <stop stopColor="#7B2F00" />
              <stop offset="0.649038" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[20.17%_22.37%_11.65%_70.23%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.5207 239.983">
          <path d={svgPaths.p3d79480} fill="url(#paint0_linear_1_2051)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2051" x1="0" x2="41.8474" y1="0" y2="-3.67678">
              <stop stopColor="#7B2F00" />
              <stop offset="0.649038" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[37.22%_11.66%_11.65%_80.95%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.5207 179.987">
          <path d={svgPaths.p29e3c680} fill="url(#paint0_linear_1_2043)" id="Vector" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2043" x1="0" x2="41.5996" y1="0" y2="-4.87333">
              <stop stopColor="#7B2F00" />
              <stop offset="0.649038" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[41.61%_78.19%_54.75%_18.91%] leading-[normal] not-italic text-[#333] text-[12px] text-center">10</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[58.66%_68.1%_37.7%_30.24%] leading-[normal] not-italic text-[#333] text-[12px] text-center">6</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[24.57%_56.77%_71.79%_40.34%] leading-[normal] not-italic text-[#333] text-[12px] text-center">14</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[33.09%_46.15%_63.27%_51.15%] leading-[normal] not-italic text-[#333] text-[12px] text-center">12</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[7.52%_35.44%_88.83%_61.87%] leading-[normal] not-italic text-[#333] text-[12px] text-center">18</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[16.05%_24.62%_80.31%_72.48%] leading-[normal] not-italic text-[#333] text-[12px] text-center">16</p>
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[33.09%_14.01%_63.27%_83.3%] leading-[normal] not-italic text-[#333] text-[12px] text-center">12</p>
      <div className="absolute inset-[0_46.69%_94.17%_46.69%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <div className="absolute flex inset-[72.16%_14.37%_7.67%_12.55%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <div className="bg-white relative rounded-[100px] size-full" data-name="Grabber" />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[298px] top-[66px]">
      <div className="absolute bg-gradient-to-b from-[#7b2f00] h-[109px] left-[298px] opacity-59 rounded-[21px] to-[#727272] top-[66px] w-[95px]" data-name="Home Screen Widget - iPad" />
      <div className="absolute h-[16.453px] left-[373.87px] overflow-clip top-[73.54px] w-[15.833px]" data-name="Circle" />
      <div className="absolute content-stretch flex flex-col gap-[8px] h-[65.832px] items-start left-[314.82px] top-[97.3px] w-[75.208px]" data-name="Text Content Heading" />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute contents left-[306.91px] top-[73.55px]" data-name="Button">
      <div className="absolute bg-[#f1f1f1] h-[47.959px] left-[306.91px] opacity-48 rounded-[158.5px] top-[73.55px] w-[43.976px]" />
      <div className="absolute bg-[#ff7575] border-3 border-solid border-white h-[34.191px] left-[312.84px] opacity-48 rounded-[158.5px] top-[80.03px] w-[31.352px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[298px] top-[66px]">
      <Group />
      <Button />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[44.248px] justify-center leading-[0] left-[307.9px] not-italic text-[#1e1e1e] text-[20px] top-[120.5px] w-[83.125px]">
        <p className="leading-[1.2]">Records</p>
      </div>
    </div>
  );
}

export default function Tracking() {
  return (
    <div className="bg-[#999] relative size-full" data-name="Tracking">
      <div className="absolute h-[36px] left-[13px] overflow-clip top-[23px] w-[46px]" data-name="Chevron left">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-11.11%_-17.39%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5001 22.0002">
              <path d={svgPaths.p25b4700} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[71px] items-center justify-center left-[21px] top-[792px] w-[361px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#ccc] h-[71px] relative rounded-[100px] w-[361px]" data-name="Grabber" />
        </div>
      </div>
      <div className="absolute h-[22px] left-[51px] overflow-clip top-[815px] w-[24px]" data-name="Home">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
          <div className="absolute inset-[-5.45%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.3333">
              <path d={svgPaths.p7517a80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[25px] left-[104px] overflow-clip top-[815px] w-[26px]" data-name="Users">
        <div className="absolute inset-[12.5%_4.17%]" data-name="Icon">
          <div className="absolute inset-[-4.27%_-3.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4333 20.35">
              <path d={svgPaths.p1dfd5370} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[158px] overflow-clip size-[20px] top-[818px]" data-name="Activity">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Icon">
          <div className="absolute inset-[-6.67%_-6%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 17">
              <path d={svgPaths.p15cc1740} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[24px] left-[216px] overflow-clip top-[816px] w-[26px]" data-name="Message circle">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.44%_-4.1%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1 19.6001">
              <path d={svgPaths.p197fb00} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[275px] overflow-clip size-[24px] top-[816px]" data-name="Map">
        <div className="absolute inset-[8.33%_4.17%]" data-name="Icon">
          <div className="absolute inset-[-6.25%_-5.68%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 22.5">
              <path d={svgPaths.pec3c600} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[332px] overflow-clip size-[24px] top-[815px]" data-name="Settings">
        <div className="absolute inset-[4.17%]" data-name="Icon">
          <div className="absolute inset-[-5.68%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 24.5">
              <g id="Icon">
                <path d={svgPaths.p22873300} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                <path d={svgPaths.p37cc82f0} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Frame />
      <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#7b2f00] h-[279px] isolate items-center left-[17px] p-[16px] rounded-[16px] to-[rgba(255,255,255,0)] top-[180px] w-[378px]" data-name="Calendar">
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Block />
        <Table />
      </div>
      <div className="absolute content-stretch flex gap-[4px] h-[40px] items-center justify-center left-[139px] px-[20px] py-[6px] rounded-[1000px] top-[808px] w-[61px]" data-name="Button - Liquid Glass - Text">
        <FillShadow />
        <GlassEffect />
      </div>
      <div className="absolute h-[22px] left-[51px] overflow-clip top-[815px] w-[24px]" data-name="Home">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
          <div className="absolute inset-[-5.45%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.3333">
              <path d={svgPaths.p7517a80} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[25px] left-[104px] overflow-clip top-[815px] w-[26px]" data-name="Users">
        <div className="absolute inset-[12.5%_4.17%]" data-name="Icon">
          <div className="absolute inset-[-4.27%_-3.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4333 20.35">
              <path d={svgPaths.p1dfd5370} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[332px] overflow-clip size-[24px] top-[815px]" data-name="Settings">
        <div className="absolute inset-[4.17%]" data-name="Icon">
          <div className="absolute inset-[-5.68%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 24.5">
              <g id="Icon">
                <path d={svgPaths.p22873300} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                <path d={svgPaths.p37cc82f0} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[24px] left-[216px] overflow-clip top-[816px] w-[26px]" data-name="Message circle">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-4.44%_-4.1%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1 19.6001">
              <path d={svgPaths.p197fb00} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[275px] overflow-clip size-[24px] top-[816px]" data-name="Map">
        <div className="absolute inset-[8.33%_4.17%]" data-name="Icon">
          <div className="absolute inset-[-6.25%_-5.68%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.5 22.5">
              <path d={svgPaths.pec3c600} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[158px] overflow-clip size-[20px] top-[818px]" data-name="Activity">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Icon">
          <div className="absolute inset-[-6.67%_-6%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 17">
              <path d={svgPaths.p15cc1740} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Frame1 />
      <div className="absolute h-[36px] left-[13px] overflow-clip top-[23px] w-[46px]" data-name="Chevron left">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-11.11%_-17.39%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5001 22.0002">
              <path d={svgPaths.p25b4700} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
      <Chart />
      <Group1 />
      <div className="absolute bg-gradient-to-b from-[#7b2f00] from-[23.75%] h-[109px] left-[19px] min-h-[80px] min-w-[240px] rounded-[16px] to-[rgba(255,255,255,0)] top-[66px] w-[264px]" data-name="AI Chat Box">
        <div className="content-stretch flex flex-col gap-[24px] items-start min-h-[inherit] min-w-[inherit] overflow-clip p-[16px] relative rounded-[inherit] size-full">
          <div className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px not-italic relative text-[#1e1e1e] text-[16px] w-full whitespace-pre-wrap">
            <p className="leading-[1.4] mb-0">{`This Month                   : 129 Ciggaretes`}</p>
            <p className="leading-[1.4]">{`Nicotine Usage            :  Very High`}</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
      </div>
    </div>
  );
}