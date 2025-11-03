// @flow strict

function page() {
  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            PDF Portfolio
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">2nd Year Portfolio</h1>
            <p className="text-gray-600 text-lg">
              A comprehensive collection of my academic projects, achievements, and skills from my second year of studies.
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            <div className="bg-gray-100 rounded-lg p-6 w-full max-w-md">
              <div className="text-center">
                <div className="mb-4">
                  <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Portfolio Document</h3>
                <p className="text-gray-600 mb-4">
                  Download my comprehensive 2nd year portfolio showcasing my projects, skills, and achievements.
                </p>
                <a 
                  href="/portfolio-2nd-year.pdf" 
                  download="Portfolio-2nd-Year.pdf"
                  className="inline-flex items-center px-6 py-3 bg-[#1a1443] text-white font-medium rounded-lg hover:bg-[#2a1f5c] transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
            
            <div className="text-center text-gray-600">
              <p className="text-sm">
                File size: ~2.5 MB | Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;