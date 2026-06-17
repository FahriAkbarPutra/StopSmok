import svgPaths from "./svg-o92wdv5ry9";

function ArrowCircleRight() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="ArrowCircleRight">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="ArrowCircleRight">
          <path clipRule="evenodd" d={svgPaths.pc92bc00} fill="var(--fill-0, #242232)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#7b2f00] content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex gap-[5px] h-[59px] items-center justify-center left-1/2 px-[50px] py-[10px] rounded-[28px] top-[calc(50%+306.5px)] w-[224px]">
      <p className="[word-break:break-word] font-['Exo:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#d1d1d1] text-[50px] whitespace-nowrap">Next</p>
      <ArrowCircleRight />
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%+306.5px)]">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#7b2f00] content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex gap-[5px] h-[39px] items-center justify-center px-[50px] py-[10px] relative rounded-[28px] w-[140px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <p className="[word-break:break-word] font-['Exo:Regular',sans-serif] font-normal leading-[normal] relative text-[16px] text-white whitespace-nowrap">Pick date</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#7b2f00] content-stretch drop-shadow-[0px_4px_7px_rgba(0,0,0,0.25)] flex gap-[5px] h-[39px] items-center justify-center px-[50px] py-[10px] relative rounded-[28px] w-[140px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <p className="[word-break:break-word] font-['Exo:Regular',sans-serif] font-normal leading-[normal] relative text-[16px] text-white whitespace-nowrap">Pick Time</p>
        </div>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.41)] content-stretch flex h-[34px] items-start left-[227px] px-[11px] py-[6px] rounded-[100px] top-[134px] w-[140px]" data-name="Time">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[20px] leading-[22px] relative shrink-0 text-[17px] text-center text-white tracking-[-0.43px] w-[118px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        9:41 AM
      </p>
    </div>
  );
}

function Date() {
  return (
    <div className="[word-break:break-word] absolute bg-[rgba(0,0,0,0.45)] content-stretch flex font-['SF_Pro:Regular',sans-serif] font-normal gap-[5px] h-[37px] items-center justify-center leading-[22px] left-[42px] px-[11px] py-[6px] rounded-[100px] text-[17px] text-center text-white top-[131px] tracking-[-0.43px] w-[140px] whitespace-nowrap" data-name="Date">
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        Apr 1,
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>
        2025
      </p>
    </div>
  );
}

function Arrows() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] gap-[28px] items-center leading-[normal] right-[16px] text-[#08f] text-[20px] text-center top-[calc(50%-1px)]" data-name="Arrows">
      <p className="h-[24px] relative shrink-0 w-[15px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`\u{100189}`}</p>
      <p className="h-[24px] relative shrink-0 w-[15px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`\u{10018A}`}</p>
    </div>
  );
}

function MonthAndYear() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[4px] h-[24px] items-center left-[16px] top-[calc(50%+5px)] whitespace-nowrap" data-name="Month and Year">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black tracking-[-0.43px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        April 2025
      </p>
      <p className="font-['SF_Pro:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#08f] text-[15px] tracking-[-0.5px]" style={{ fontVariationSettings: '"wdth" 100', fontFeatureSettings: '"ss15"' }}>{`\u{10018A}`}</p>
    </div>
  );
}

function Header() {
  return (
    <div className="[word-break:break-word] h-[40px] relative shrink-0 w-full" data-name="Header">
      <Arrows />
      <MonthAndYear />
    </div>
  );
}

function DateHeader() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Date Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['SF_Pro:Semibold',sans-serif] font-[590] items-center justify-between leading-[0] px-[16px] relative size-full text-[13px] text-[rgba(60,60,67,0.3)] text-center uppercase">
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[18px]">SUN</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[18px]">MON</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[18px]">WED</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[18px]">THU</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[18px]">FRI</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[18px]">SAT</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[18px]">SUN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Separator">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.12)] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <Separator />
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start pt-[3px] relative shrink-0 w-full" data-name="Calendar">
      <div className="relative shrink-0 w-full" data-name="_Week">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-between px-[16px] relative size-full">
            <div className="relative shrink-0 size-[44px]" data-name="Day" />
            <div className="relative shrink-0 size-[44px]" data-name="Day" />
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[#08f] text-[20px] text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">1</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">2</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">3</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">4</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[44px] relative shrink-0 w-full" data-name="Week 2">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-between px-[16px] relative size-full">
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">6</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">7</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">8</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">9</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">10</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">11</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[44px] relative shrink-0 w-full" data-name="Week 3">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-between px-[16px] relative size-full">
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">13</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">14</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">15</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">16</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">17</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">18</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">19</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[44px] relative shrink-0 w-full" data-name="Week 4">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-between px-[16px] relative size-full">
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[44px] top-1/2" data-name="Ellipse">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
                  <circle cx="22" cy="22" fill="var(--fill-0, #0088FF)" id="Ellipse" opacity="0.12" r="22" />
                </svg>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] left-1/2 size-[44px] text-[#08f] text-[24px] text-center top-1/2" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">20</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">21</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">22</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">23</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">24</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">25</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">26</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[44px] relative shrink-0 w-full" data-name="Week 5">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-between px-[16px] relative size-full">
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">27</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">28</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">29</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                <p className="leading-[25px]">30</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" />
            <div className="relative shrink-0 size-[44px]" data-name="Day" />
            <div className="relative shrink-0 size-[44px]" data-name="Day" />
          </div>
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Time2() {
  return (
    <div className="bg-[rgba(118,118,128,0.12)] content-stretch flex items-start px-[11px] py-[6px] relative rounded-[100px] shrink-0" data-name="Time">
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[17px] text-black text-center tracking-[-0.43px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        9:41 AM
      </p>
    </div>
  );
}

function ContentsTrailing() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-end relative shrink-0" data-name="Contents - Trailing">
      <div className="content-stretch flex gap-[6px] h-[34px] items-center justify-end relative rounded-[6px] shrink-0" data-name="Date and time - Collapsed">
        <Time2 />
      </div>
    </div>
  );
}

function Time1() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Time">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[17px] text-black tracking-[-0.43px] w-[136px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            <p className="leading-[22px]">Time</p>
          </div>
          <ContentsTrailing />
        </div>
      </div>
    </div>
  );
}

export default function UserForm() {
  return (
    <div className="bg-[#8e8e93] relative size-full" data-name="USER FORM 2">
      <div className="absolute bg-gradient-to-b from-[#7b2f00] h-[897px] left-[-5px] rounded-[21px] to-[#727272] top-[-17px] w-[414px]" data-name="Home Screen Widget - iPad" />
      <div className="absolute left-[139px] overflow-clip size-[24px] top-[820px]" data-name="Circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
              <path d={svgPaths.pe99a680} id="Icon" stroke="var(--stroke-0, #BF6A02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[172px] overflow-clip size-[24px] top-[820px]" data-name="Circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
              <path d={svgPaths.pe99a680} id="Icon" stroke="var(--stroke-0, #BF6A02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[205px] overflow-clip size-[24px] top-[820px]" data-name="Circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
              <path d={svgPaths.pe99a680} id="Icon" stroke="var(--stroke-0, #BF6A02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[238px] overflow-clip size-[24px] top-[820px]" data-name="Circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
              <path d={svgPaths.pe99a680} id="Icon" stroke="var(--stroke-0, #BF6A02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] left-[144px] size-[28px] top-[816px]">
        <div className="absolute inset-[3.81%_25.81%_-3.81%_-25.81%]">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
              <g filter="url(#filter0_f_1_255)" id="Ellipse 4" opacity="0.6">
                <circle cx="18" cy="18" fill="var(--fill-0, #7B2F00)" r="14" />
                <circle cx="18" cy="18" r="13.5" stroke="var(--stroke-0, black)" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36" id="filter0_f_1_255" width="36" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_1_255" stdDeviation="2" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[135px] left-[134px] top-[66px] w-[124px]" data-name="Calendar_perspective_matte" />
      <Group />
      <div className="-translate-x-1/2 absolute bottom-[752px] flex h-[39px] items-center justify-center left-[calc(50%-89px)] w-[140px]">
        <div className="-scale-y-100 flex-none">
          <Frame2 />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[752px] flex h-[39px] items-center justify-center left-[calc(50%+96px)] w-[140px]">
        <div className="-scale-y-100 flex-none">
          <Frame3 />
        </div>
      </div>
      <Time />
      <Date />
      <div className="absolute content-stretch drop-shadow-[0px_10px_30px_rgba(0,0,0,0.1)] flex flex-col items-start left-[16px] overflow-clip rounded-[13px] top-[228px] w-[370px]" data-name="Date and time - Pickers">
        <div className="absolute inset-0 overflow-clip" data-name="Material">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute bg-[rgba(255,255,255,0.25)] inset-0 mix-blend-plus-lighter" />
            <div className="absolute backdrop-blur-[50px] bg-[rgba(255,255,255,0.6)] inset-0 mix-blend-color-dodge" />
          </div>
        </div>
        <Header />
        <DateHeader />
        <Calendar />
        <Time1 />
      </div>
      <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[0] left-[54px] not-italic text-[16px] text-black top-[51px] w-[240px]">
        <p className="leading-[1.4] mb-0">Pick Date</p>
        <p className="leading-[1.4]">​</p>
      </div>
      <div className="absolute h-[36px] left-[12px] overflow-clip top-[45px] w-[46px]" data-name="Chevron left">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-11.11%_-17.39%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5001 22.0002">
              <path d={svgPaths.p25b4700} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}