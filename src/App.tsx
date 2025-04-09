import {
  Award,
  BookOpen,
  Briefcase,
  CheckSquare2,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Settings,
} from 'lucide-react';
import {ReactNode} from "react";

function App() {

  const SquareWithText = ({children} : {children: ReactNode}) => {
    return (
        <>
          <CheckSquare2 size={20} className={'text-green-500 inline'} /> {children} <br/>
        </>
    )
  }

  const LogoWithText = ({logo, logoText, children} : {logo: string, logoText: string, children: ReactNode}) => {
    return (
        <>
          <img src={logo} alt={logoText} width={32} className={'text-blue-300 inline'} /> {children}
        </>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="min-h-screen">
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-32 flex flex-col items-center text-center">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
            alt="프로필 사진"
            className="w-40 h-40 rounded-full mb-8 border-4 border-blue-400/50 shadow-lg shadow-blue-500/30"
          />
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">양수호</h1>
          <p className="text-2xl text-gray-600 mb-8 font-light">풀스택 개발자</p>
          <div className="flex gap-6">
            <a href="https://github.com/YangSooHo" className="text-gray-600 hover:text-blue-600 transition-all transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="mailto:ysh5586@naver.com" className="text-gray-600 hover:text-blue-600 transition-all transform hover:scale-110">
              <Mail size={28} />
            </a>
            <a href="https://www.linkedin.com/in/%EC%88%98%ED%98%B8-%EC%96%91-67045a35b/" className="text-gray-600 hover:text-blue-600 transition-all transform hover:scale-110">
              <Linkedin size={28} />
            </a>
          </div>
        </header>

        {/* Skills Section */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">기술 스택</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <Code2 className="w-12 h-12 mb-6 text-blue-600 mx-auto" />
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Front-end</h3>
                <ul className="text-gray-600 space-y-3 text-center">
                  <li>JavaScript / TypeScript</li>
                  <li>React / Next.js</li>
                  <li>HTML5 / CSS3</li>
                  <li>Thymeleaf / JSP</li>
                  <li>Apache Freemarker</li>
                  <li>tailwind CSS / Bootstrap</li>
                  <li>Ant Design</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <Award className="w-12 h-12 mb-6 text-blue-600 mx-auto" />
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Back-end</h3>
                <ul className="text-gray-600 space-y-3 text-center">
                  <li>Python</li>
                  <li>Java / Spring Boot</li>
                  <li>Node.js</li>
                  <li>Redis Server</li>
                  <li>MS SQL Server / MySQL</li>
                  <li>RESTful API</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <BookOpen className="w-12 h-12 mb-6 text-blue-600 mx-auto" />
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">DevOps</h3>
                <ul className="text-gray-600 space-y-3 text-center">
                  <li>MS Azure / Docker</li>
                  <li>Jenkins / GitHub Actions</li>
                  <li>Linux / Shell Script</li>
                  <li>Monitoring / Logging</li>
                  <li>NGiNX</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">업무 경력</h2>
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">시니어 풀스택 개발자</h3>
                    <p className="text-blue-600 mb-4">(주)디티앤씨알오 • 2024.07 - 2024.07</p>
                    <ul className="text-gray-600 space-y-2 list-disc list-inside">
                      <li>임상 데이터 관리 시스템 관리 및 유지보수</li>
                      <li>임상 데이터 관리 시스템 구조도 설계</li>
                      <li>개발 팀 리드 및 개발자 총괄 멘토링</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">풀스택 개발자</h3>
                    <p className="text-blue-600 mb-4">(주)세이프소프트 • 2019.07 - 2024.07</p>
                    <ul className="text-gray-600 space-y-2 list-disc list-inside">
                      <li>임상 데이터 관리 시스템 관련 RESTful API 설계 및 개발</li>
                      <li>임상 데이터 관리 시스템 관련 강의 진행 및 커리큘럼 설계</li>
                      <li>임상 데이터 관리 시스템 설계 구축 및 개발, 유지보수</li>
                      <li>ISO 교육 관리 시스템 설계 및 개발 및 유지보수</li>
                      <li>표준 업무 절차 시스템 및 교육 관리 시스템 개발 및 유지보수</li>
                      <li>비임상 연구실 시스템 인터페이스 설계 및 개발 및 유지보수 [의료기기 데이터 연동]</li>
                      <li>시험 일정 관리 시스템 설계 및 개발 및 모니터링 시스템 구축</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <div className="flex items-start gap-4">
                  <Settings className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">자동화시스템 개발자</h3>
                    <p className="text-blue-600 mb-4">(주)링크제니시스 • 2017.03 - 2019.05</p>
                    <ul className="text-gray-600 space-y-2 list-disc list-inside">
                      <li>LG 자동화 모듈 테스트 관련 스크립트 개발</li>
                      <li>GM AVN 관련 OS 임베디드 개발</li>
                      <li>LG 자동화 테스트 시스템 유지보수 및 추가기능 개발</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">프로젝트</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="group bg-white rounded-2xl overflow-hidden border border-blue-200 shadow-lg hover:shadow-xl transition-all">
                <div className="relative">
                  <img
                    src="http://www.safesoft.co.kr/bizdemo115364/img/cdms_img_01.png"
                    alt="RedPineCDMS"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="https://cdms.redpine.io/login" className="p-2 bg-white/80 rounded-full inline-block hover:bg-white transition-colors">
                      <ExternalLink size={20} className="text-blue-600" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">임상 데이터 관리 시스템</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    <SquareWithText>Spring Boot와 React / Thymeleaf 및 Redis Server를 활용한 종합적인 임상 데이터 관리 시스템.</SquareWithText>
                    <SquareWithText>총 5개의 모놀리스(Monolithic) SaaS 웹 서비스와 MS SQL Server 및 MongoDB로 데이터 관리.</SquareWithText>
                    <SquareWithText>JAXB를 통해 XML-Class간 변환 처리를 수행하고, JPA, JPQL기반의 쿼리 응용과 JEXL 라이브러리를 활용한 웹 사이트 내 컴파일 기능을 수행한 메타데이터 구축 및 버전 관리가 가능</SquareWithText>
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Spring Boot</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Thymeleaf</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">MS SQL Server</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">MongoDB</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Redis Server</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">NGiNX</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">JAXB</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">JPA/JPQL</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">JEXL</span>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-2xl overflow-hidden border border-blue-200 shadow-lg hover:shadow-xl transition-all">
                <div className="relative">
                  <img
                    src="/images/isoms.png"
                    alt="ISO 관리 시스템"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="p-2 bg-white/80 rounded-full inline-block hover:bg-white transition-colors">
                      <ExternalLink size={20} className="text-blue-600" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">ISO 관리 시스템</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    <SquareWithText>Spring Boot와 Apache Freemarker, JSP를 활용한 교육 관리 시스템.</SquareWithText>
                    <SquareWithText>전자 결제 기능을 비롯 하여, SOP 문서 열람과 ISO 문서 열람 및 교육을 총괄할 수 있는 시스템.</SquareWithText>
                    <SquareWithText>사용자가 관리자에게 직접 ROLE을 요청할 수 있고, 모든 메뉴에 대한 내용을 data-envers 모듈을 활용하여 기록함.</SquareWithText>
                    <SquareWithText>GroupDocs 컴포넌트를 활용하여 문서 변환 및 워터마크를 생성하여 문서 관리를 수행함.</SquareWithText>
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Spring Boot</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Apache Freemarker</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">JSP</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">MS SQL Server</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">PDF.js</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">Envers</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">GroupDocs</span>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-2xl overflow-hidden border border-blue-200 shadow-lg hover:shadow-xl transition-all">
                <div className="relative">
                  <img
                      src="/images/sop.png"
                      alt="eSOP"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="http://esop.dtncro.co.kr" className="p-2 bg-white/80 rounded-full inline-block hover:bg-white transition-colors" style={{height:'1px'}}>
                      <ExternalLink size={20} className="text-blue-600" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">전자 표준 업무 절차 시스템</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    <SquareWithText>Spring Boot와 Apache Freemarker, JSP를 활용한 표준 업무 절차 문서 관리 시스템.</SquareWithText>
                    <SquareWithText>전자 결제 기능을 비롯 하여, SOP 문서 열람을 수 있는 시스템</SquareWithText>
                    <SquareWithText>GroupDocs 컴포넌트를 활용하여 문서 변환 및 워터마크를 생성하여 문서 관리를 수행함</SquareWithText>
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Spring Boot</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Apache Freemarker</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">JSP</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">MS SQL Server</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">PDF.js</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">GroupDocs</span>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-2xl overflow-hidden border border-blue-200 shadow-lg hover:shadow-xl transition-all">
                <div className="relative">
                  <img
                      src="/images/lms.png"
                      alt="ISO 관리 시스템"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="p-2 bg-white/80 rounded-full inline-block hover:bg-white transition-colors">
                      <ExternalLink size={20} className="text-blue-600" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">전자 교육 관리 시스템</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    <SquareWithText>Spring Boot와 Thymeleaf를 활용한 교육 관리 시스템.</SquareWithText>
                    <SquareWithText>교육을 등록 및 수강할 수 있고, 수강 종료 후 수료증을 발급할 수 있는 시스템</SquareWithText>
                    <SquareWithText>디지털 바인더 기능을 활용해, 교육 기록 및 CV(Curriculum Vitae) 등의 문서를 통합하여 관리</SquareWithText>
                    <SquareWithText>GroupDocs 컴포넌트를 활용하여 문서 변환 및 워터마크를 생성하여 문서 관리를 수행함</SquareWithText>
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Spring Boot</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Apache Freemarker</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">MS SQL Server</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">PDF.js</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">GroupDocs</span>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-2xl overflow-hidden border border-blue-200 shadow-lg hover:shadow-xl transition-all">
                <div className="relative">
                  <img
                      src="/images/send_interface.png"
                      alt="의료기기-비임상 인터페이스"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/*<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">*/}
                  {/*  <a href="#" className="p-2 bg-white/80 rounded-full inline-block hover:bg-white transition-colors">*/}
                  {/*    <ExternalLink size={20} className="text-blue-600" />*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">의료기기-비임상 인터페이스</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    <SquareWithText>BCGSoft 기반의 MFC 모듈로 의료기기 데이터 그리드 및 전송 모듈 구축</SquareWithText>
                    <SquareWithText>Spring Boot와 Thymeleaf를 활용하여 서버 데이터 전송 인터페이스 백엔드 구축.</SquareWithText>
                    <SquareWithText>비임상 SNED 데이터 시스템에 의료기기 데이터를 전달하는 역할을 수행</SquareWithText>
                    <SquareWithText>취합된 데이터는 MS SQL Server기반 비임상 관련 시스템의 데이터베이스에 사용됨</SquareWithText>
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">MFC</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Spring Boot</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Thymeleaf</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">MS SQL Server</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">BCGSoft</span>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-2xl overflow-hidden border border-blue-200 shadow-lg hover:shadow-xl transition-all">
                <div className="relative">
                  <img
                      src="/images/ssms.png"
                      alt="시험 일정 관리 시스템"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/*<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">*/}
                  {/*  <a href="#" className="p-2 bg-white/80 rounded-full inline-block hover:bg-white transition-colors">*/}
                  {/*    <ExternalLink size={20} className="text-blue-600" />*/}
                  {/*  </a>*/}
                  {/*</div>*/}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">시험 일정 관리 시스템</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    <SquareWithText>Spring Boot와 JSP를 활용한 시험 일정 관리 시스템.</SquareWithText>
                    <SquareWithText>MS SQL Server 기반의 데이터베이스 구축</SquareWithText>
                    <SquareWithText>Apache POI 라이브러리를 이용한 엑셀 데이터 등록 기능 수행</SquareWithText>
                    <SquareWithText>CanvasAPI를 통한 장비 데이터 모니터링 시스템 구축</SquareWithText>
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Spring Boot</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">JSP</span>
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">MS SQL Server</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">Apache POI</span>
                    <span className="px-3 py-1 bg-amber-100 text-black rounded-full text-sm">CanvasAPI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reference Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">기술 참조</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">개발 환경</h3>
                <ul className="text-gray-600 space-y-3 flex flex-col items-start justify-center">
                  <li><LogoWithText logo={'https://ko.legacy.reactjs.org/favicon.ico'} logoText={'React'}><strong className='text-2xl min-w-44 inline-flex'>React</strong> | <span className={'text-2xl'}>포트폴리오 기반 언어로 사용</span></LogoWithText></li>
                  <li><LogoWithText logo={'https://lucide.dev/logo.light.svg'} logoText={'Lucide-react'}><strong className='text-2xl min-w-44 inline-flex'>lucide-react</strong> |  <span className={'text-2xl'}>텍스트 아이콘 사용</span></LogoWithText> </li>
                  <li><LogoWithText logo={'https://ko.vite.dev/logo.svg'} logoText={'Vite'}><strong className='text-2xl min-w-44 inline-flex'>Vite</strong> | <span className={'text-2xl'}>포트폴리오 프로젝트를 빌드 하기위한 Tool</span></LogoWithText></li>
                  <li><LogoWithText logo={'https://bolt.new/static/favicon.svg'} logoText={'Bolt New'}><strong className='text-2xl min-w-44 inline-flex'>Bolt New</strong> | <span className={'text-2xl'}>포트폴리오 초안 작업 진행</span></LogoWithText></li>
                  <li><LogoWithText logo={'https://tailwindcss.com/favicon.ico'} logoText={'Tailwind CSS'}><strong className='text-2xl min-w-44 inline-flex'>Tailwind CSS</strong> | <span className={'text-2xl'}>레이아웃 디자인에 사용된 CSS</span></LogoWithText></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-blue-50">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© 2025 양수호. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;