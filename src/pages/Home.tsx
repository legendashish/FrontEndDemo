export default function Home() {
  return (
    <main className="container mx-auto max-w-[900px] px-4 my-12">
      <h3 className="text-center text-2xl text-gray-800 font-medium mb-8">
        Hi, I'm Fi! Here for legal research & document drafting.
      </h3>

      <div className="relative">
        <div className="chat-box bg-gray-50 border-2 border-gray-200 rounded-xl p-10 min-h-[400px]">
          <div className="placeholder-text text-gray-400 text-lg">
            What kind of document would you like to create?
          </div>
        </div>

        <aside className="hidden lg:block absolute -right-[320px] top-0 w-[300px] bg-white border-2 border-gray-200 rounded-lg p-5">
          <div className="text-purple-700 font-semibold mb-3 flex items-center gap-2">
            <span>ℹ️</span> Fi Facts
          </div>
          <p className="text-gray-600 text-sm leading-6">
            Required clauses & provisions for different documents vary by case and state. Make sure this is accurate before continuing.
          </p>
        </aside>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <input className="flex-1 text-input bg-white border-2 border-gray-200 rounded-md px-5 py-4 text-base" placeholder="Type here..." />
        <button className="send-button bg-purple-700 text-white px-6 py-4 rounded-md font-semibold">➤</button>
      </div>

      <div className="mt-6 bg-amber-100 border-l-4 border-amber-500 p-4 rounded">
        <strong>Key Elements:</strong>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          <li>Clean, minimal interface with centered chat experience</li>
          <li>Fi assistant branding with personality</li>
          <li>Large input area for user queries</li>
          <li>Contextual sidebar with helpful tips</li>
        </ul>
      </div>
    </main>
  )
}
