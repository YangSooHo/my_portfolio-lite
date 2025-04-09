import {Award, BookOpen, Briefcase, Settings, Code2, ExternalLink, Github, Linkedin, Mail} from 'lucide-react';

function App() {
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
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">Skills</h2>
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
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">Experience</h2>
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
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">Projects</h2>
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
                    - Spring Boot와 React / Thymeleaf 및 Redis Server를 활용한 종합적인 임상 데이터 관리 시스템.<br/>
                    - 총 5개의 모놀리스(Monolithic) SaaS 웹 서비스와 MS SQL Server 및 MongoDB로 데이터 관리.<br/>
                    - JAXB를 통해 XML-Class간 변환 처리를 수행하고, JPA, JPQL기반의 쿼리 응용과 JEXL 라이브러리를 활용한 웹 사이트 내 컴파일 기능을 수행한 메타데이터 구축 및 버전 관리가 가능
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
                    src="../public/images/isoms.png"
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
                    - Spring Boot와 Apache Freemarker를 활용한 교육 관리 시스템.<br/>
                    - 전자 결제 기능을 비롯 하여, SOP 문서 열람과 ISO 문서 열람 및 교육을 총괄할 수 있는 시스템.<br/>
                    - 사용자가 관리자에게 직접 ROLE을 요청할 수 있고, 모든 메뉴에 대한 내용을 data-envers 모듈을 활용하여 기록함.<br/>
                    - GroupDocs 컴포넌트를 활용하여 문서 변환 및 워터마크를 생성하여 문서 관리를 수행함.<br/>
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Spring Boot</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Apache Freemarker</span>
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
                      src="/images/isoms.png"
                      alt="eSOP"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="https://isoms.safesoft.co.kr/" className="p-2 bg-white/80 rounded-full inline-block hover:bg-white transition-colors" style={{height:'1px'}}>
                      <ExternalLink size={20} className="text-blue-600" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">전자 표준 업무 절차 시스템</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    - Spring Boot와 Apache Freemarker를 활용한 표준 업무 절차 문서 관리 시스템.<br/>
                    - 전자 결제 기능을 비롯 하여, SOP 문서 열람을 수 있는 시스템<br/>
                    - GroupDocs 컴포넌트를 활용하여 문서 변환 및 워터마크를 생성하여 문서 관리를 수행함<br/>
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
                      src="../public/images/isoms.png"
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
                    Spring Boot와 Apache Freemarker를 활용한 교육 관리 시스템.
                    전자 결제 기능을 비롯 하여, SOP 문서 열람과 ISO 문서 열람 및 교육을 총괄할 수 있는 시스템
                    GroupDocs 컴포넌트를 활용하여 문서 변환 및 워터마크를 생성하여 문서 관리를 수행함
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
                      src="../public/images/isoms.png"
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
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">의료기기 - 비임상 인터페이스</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Spring Boot와 Apache Freemarker를 활용한 교육 관리 시스템.
                    전자 결제 기능을 비롯 하여, SOP 문서 열람과 ISO 문서 열람 및 교육을 총괄할 수 있는 시스템
                    GroupDocs 컴포넌트를 활용하여 문서 변환 및 워터마크를 생성하여 문서 관리를 수행함
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
                      src="../public/images/isoms.png"
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
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">시험 일정 관리 시스템</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Spring Boot와 Apache Freemarker를 활용한 교육 관리 시스템.
                    전자 결제 기능을 비롯 하여, SOP 문서 열람과 ISO 문서 열람 및 교육을 총괄할 수 있는 시스템
                    GroupDocs 컴포넌트를 활용하여 문서 변환 및 워터마크를 생성하여 문서 관리를 수행함
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
            </div>
          </div>
        </section>

        {/* Reference Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">Reference</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">개발 환경</h3>
                <ul className="text-gray-600 space-y-3">
                  <li>• IntelliJ IDEA Ultimate</li>
                  <li>• Git / GitHub</li>
                  <li>• Postman</li>
                  <li>• Docker Desktop</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">프레임워크 & 라이브러리</h3>
                <ul className="text-gray-600 space-y-3">
                  <li>• Spring Boot 3.x</li>
                  <li>• JPA / QueryDSL</li>
                  <li>• JUnit5 / Mockito</li>
                  <li>• React 18 / TypeScript</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">데이터베이스</h3>
                <ul className="text-gray-600 space-y-3">
                  <li>• MySQL 8.0</li>
                  <li>• Redis</li>
                  <li>• MongoDB</li>
                  <li>• ElasticSearch</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-blue-200 shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">인프라 & 클라우드</h3>
                <ul className="text-gray-600 space-y-3">
                  <li>• AWS EC2 / S3</li>
                  <li>• Docker / Kubernetes</li>
                  <li>• Jenkins / GitHub Actions</li>
                  <li>• Prometheus / Grafana</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-blue-50">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© 2024 홍길동. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;