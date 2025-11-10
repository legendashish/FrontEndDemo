export default function Overview() {
  return (
    <main className="container mx-auto max-w-[1200px] px-4 my-12">
      <section className="wireframe p-8 bg-white rounded-xl shadow border border-gray-200">
        <header className="wireframe-header flex items-center justify-between mb-6">
          <h2 className="screen-title text-purple-700 text-2xl font-semibold">Key Features & User Flow</h2>
          <span className="screen-number bg-purple-700 text-white px-4 py-1 rounded-full font-semibold">Overview</span>
        </header>

        <div className="annotations">
          <h3 className="annotation-title font-semibold text-gray-800 mb-4">User Journey:</h3>

          <div className="annotation-box border-2 border-gray-200 rounded p-4 mb-3">
            <strong className="text-purple-700">Step 1:</strong> User lands on home page and describes document needs in natural language
          </div>

          <div className="annotation-box border-2 border-gray-200 rounded p-4 mb-3">
            <strong className="text-purple-700">Step 2:</strong> AI processes request and shows loading state while generating document
          </div>

          <div className="annotation-box border-2 border-gray-200 rounded p-4 mb-3">
            <strong className="text-purple-700">Step 3:</strong> Email verification required before accessing generated document
          </div>

          <div className="annotation-box border-2 border-gray-200 rounded p-4">
            <strong className="text-purple-700">Step 4:</strong> User accesses full editor with AI chat assistance for refinements
          </div>
        </div>

        <div className="annotations mt-10">
          <h3 className="annotation-title font-semibold text-gray-800 mb-4">Design System:</h3>

          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div>
              <h4 className="font-semibold mb-3">Colors</h4>
              <div className="flex gap-3 mb-2 items-center">
                <div className="w-10 h-10 rounded bg-purple-700"></div>
                <div>
                  <div className="font-semibold">#6b46c1</div>
                  <div className="text-gray-600 text-sm">Primary Purple</div>
                </div>
              </div>
              <div className="flex gap-3 mb-2 items-center">
                <div className="w-10 h-10 rounded bg-gray-800"></div>
                <div>
                  <div className="font-semibold">#333333</div>
                  <div className="text-gray-600 text-sm">Text Dark</div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded bg-gray-50 border"></div>
                <div>
                  <div className="font-semibold">#f9fafb</div>
                  <div className="text-gray-600 text-sm">Background Light</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Typography</h4>
              <div className="mb-2">
                <div className="font-semibold">System Fonts</div>
                <div className="text-gray-600 text-sm">-apple-system, SF Pro</div>
              </div>
              <div className="mb-2">
                <div className="font-semibold">Headings</div>
                <div className="text-gray-600 text-sm">1.5em - 2.5em, 600 weight</div>
              </div>
              <div>
                <div className="font-semibold">Body Text</div>
                <div className="text-gray-600 text-sm">1em, 400-500 weight</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Components</h4>
              <div className="mb-2">
                <div className="font-semibold">Border Radius</div>
                <div className="text-gray-600 text-sm">8px - 12px</div>
              </div>
              <div className="mb-2">
                <div className="font-semibold">Spacing</div>
                <div className="text-gray-600 text-sm">12px - 40px increments</div>
              </div>
              <div>
                <div className="font-semibold">Shadows</div>
                <div className="text-gray-600 text-sm">0 4px 20px rgba(0,0,0,0.08)</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
