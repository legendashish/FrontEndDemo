export default function Verify() {
  return (
    <main className="container mx-auto max-w-[1000px] px-4 my-12">
      <div className="relative min-h-[600px] bg-gray-100 rounded-xl p-10">
        <div className="bg-gray-300/70 p-10 rounded-md max-w-3xl mx-auto opacity-70">
          <div className="text-center text-xl font-semibold mb-5">Document Preview Background</div>
          <div className="border-2 border-gray-300 rounded-md p-8 bg-white space-y-3">
            <div className="h-5 bg-gray-200 rounded"></div>
            <div className="h-5 bg-gray-200 rounded w-4/5"></div>
            <div className="h-5 bg-gray-200 rounded w-11/12"></div>
            <div className="h-5 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>

        <div className="modal-overlay fixed inset-0 bg-black/50 grid place-items-center">
          <div className="modal bg-white rounded-2xl p-10 w-[min(500px,90vw)] shadow-2xl">
            <div className="modal-header flex items-center justify-between mb-5">
              <h3 className="modal-title text-xl font-semibold">🔑 Enter verification code</h3>
              <div className="close-btn w-8 h-8 border-2 border-gray-300 rounded-full grid place-items-center text-gray-500 cursor-pointer">✕</div>
            </div>

            <p className="verification-info text-gray-600 mb-6">We've sent a verification code to test@gmail.com</p>

            <div className="code-inputs flex gap-2 justify-center mb-7">
              {Array.from({ length: 6 }).map((_, i) => (
                <input key={i} type="text" maxLength={1} defaultValue="0" className="code-input w-12 h-14 border-2 border-gray-200 rounded text-center text-2xl font-semibold focus:outline-none focus:border-purple-700" />
              ))}
            </div>

            <div className="modal-buttons flex gap-3">
              <button className="btn-secondary flex-1 py-3 border-2 border-gray-200 rounded font-semibold text-gray-700">Back</button>
              <button className="btn-primary flex-1 py-3 bg-purple-700 text-white rounded font-semibold">Verify & Send</button>
            </div>
          </div>
        </div>

        {/* Decorative stars */}
        <div className="hidden md:block absolute left-12 top-24 text-5xl text-purple-200">★</div>
        <div className="hidden md:block absolute right-20 top-36 text-5xl text-purple-200">★</div>
        <div className="hidden md:block absolute left-24 bottom-36 text-5xl text-purple-200">★</div>
        <div className="hidden md:block absolute right-12 bottom-24 text-5xl text-purple-200">★</div>
      </div>

      <div className="mt-5 bg-amber-100 border-l-4 border-amber-500 p-4 rounded">
        <strong>Security Features:</strong>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          <li>6-digit verification code input</li>
          <li>Email confirmation for document access</li>
          <li>Modal overlay prevents background interaction</li>
          <li>Clear call-to-action buttons</li>
        </ul>
      </div>
    </main>
  )
}
