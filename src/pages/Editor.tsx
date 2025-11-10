export default function Editor() {
  return (
    <main className="container mx-auto max-w-[1200px] px-4 my-12 pb-72">
      <div className="editor-container border-2 border-gray-200 rounded-xl overflow-hidden">
        <div className="editor-header flex items-center justify-between px-8 py-5 bg-gray-50 border-b-2 border-gray-200">
          <h3 className="doc-title text-xl font-semibold text-gray-800">Mutual Nondisclosure Agreement</h3>
          <div className="action-buttons flex gap-3">
            <button className="action-btn btn-new-draft bg-purple-700 text-white px-5 py-2 rounded">+ New Draft</button>
            <button className="action-btn btn-docx bg-indigo-700 text-white px-5 py-2 rounded">📄 DOCX</button>
            <button className="action-btn btn-pdf bg-purple-700 text-white px-5 py-2 rounded">⬇️ PDF</button>
          </div>
        </div>

        <div className="toolbar flex gap-1 flex-wrap px-8 py-4 bg-white border-b-2 border-gray-200">
          {['↶','↷','H ▼','≡','☰','📋','B','I','S','</>','U','🎨','🔗','x²','x₂','⋮','—','☰','☷','⚙️ Add'].map((t,i)=> (
            <button key={i} className="toolbar-btn px-3 py-2 rounded hover:bg-gray-100 border-2 border-transparent text-gray-600 font-medium">{t}</button>
          ))}
        </div>

        <div className="document-content relative p-16 bg-white min-h-[600px]">
          <h1 className="doc-heading text-center text-2xl font-bold tracking-wide mb-10">MUTUAL NONDISCLOSURE AGREEMENT</h1>

          <h2 className="doc-subheading text-center text-xl font-semibold mb-6">MUTUAL NONDISCLOSURE AGREEMENT</h2>

          <p className="doc-paragraph text-gray-700 leading-8 mb-5 text-justify">
            This mutual nondisclosure agreement is between <span className="highlight bg-amber-100 px-1">[PARTY ONE NAME]</span>, a[n]
            <span className="highlight bg-amber-100 px-1"> [State of Organization, if not an individual]</span>
            <span className="highlight bg-amber-100 px-1"> [Business Type]</span> whose principal address is
            <span className="highlight bg-amber-100 px-1"> [Full Mailing Address]</span> and
            <span className="highlight bg-amber-100 px-1"> [YOUR NAME OR ORGANIZATION NAME]</span>, a[n]
            <span className="highlight bg-amber-100 px-1"> [State of Organization, if not an individual]</span>
            <span className="highlight bg-amber-100 px-1"> [Business Type]</span> whose principal address is
            <span className="highlight bg-amber-100 px-1"> [Full Mailing Address]</span>.
          </p>

          <p className="doc-paragraph text-gray-700 leading-8 mb-5 text-justify">
            Each party has developed certain confidential information that it may disclose to the other party for the purpose of
            <span className="highlight bg-amber-100 px-1"> [why the parties are exchanging information]</span>.
          </p>

          <p className="doc-paragraph text-gray-700 leading-8 mb-5">The parties therefore agree as follows:</p>

          <p className="doc-paragraph ml-5 mb-3">1.</p>

          <p className="doc-paragraph font-semibold mt-5">CONFIDENTIAL INFORMATION.</p>

          <p className="doc-paragraph text-gray-700 leading-8 mb-5">
            Each party (in such capacity, a <strong>Disclosing Party</strong>) may disclose certain of its confidential and proprietary information to the other party (in such capacity, a <strong>Receiving Party</strong>). "<strong>Confidential Information</strong>" means:
          </p>

          <p className="doc-paragraph text-gray-700 leading-8 ml-10">
            1. information relating to the Disclosing Party or its current or proposed business, including financial statements, budgets and projections, customer identifying information, potential and intended customers...
          </p>

          <aside className="info-sidebar hidden xl:block absolute right-5 top-5 w-80 bg-white border-2 border-gray-200 rounded-xl p-5 shadow">
            <h4 className="sidebar-title text-purple-700 font-semibold">Fi Facts</h4>
            <p className="text-gray-600 text-sm mb-4">Legal insights & tips</p>
            <div className="info-item border-b border-gray-200 pb-4 mb-4">
              <span className="info-number inline-block w-7 h-7 rounded-full bg-purple-700 text-white text-center leading-7 font-semibold mr-2">1</span>
              <span className="info-text text-gray-700 text-sm">This is an editable version of your document!</span>
            </div>
            <div className="info-item border-b border-gray-200 pb-4 mb-4">
              <span className="info-number inline-block w-7 h-7 rounded-full bg-purple-700 text-white text-center leading-7 font-semibold mr-2">2</span>
              <span className="info-text text-gray-700 text-sm">Use the toolbar above to format text, add lists, and customize the document.</span>
            </div>
            <div className="info-item border-b border-gray-200 pb-4 mb-4">
              <span className="info-number inline-block w-7 h-7 rounded-full bg-purple-700 text-white text-center leading-7 font-semibold mr-2">3</span>
              <span className="info-text text-gray-700 text-sm">Export to PDF for final sharing or DOCX for further editing.</span>
            </div>
            <div className="info-item">
              <span className="info-number inline-block w-7 h-7 rounded-full bg-purple-700 text-white text-center leading-7 font-semibold mr-2">4</span>
              <span className="info-text text-gray-700 text-sm">Chat with Fi on the left to make AI-powered changes to your document.</span>
            </div>
          </aside>
        </div>
      </div>

      <div className="chat-panel fixed left-0 right-0 bottom-0 bg-white border-t-2 border-gray-200 px-8 py-5">
        <div className="chat-messages mb-4">
          <div className="chat-message bg-gray-100 rounded-lg px-4 py-3 mb-2 max-w-[80%]">
            <div className="message-label text-xs font-semibold text-purple-700 mb-1">Fi Assistant</div>
            <div>What kind of document would you like to create?</div>
          </div>
          <div className="chat-message bg-purple-100 rounded-lg px-4 py-3 mb-2 ml-auto max-w-[80%]">
            <div>Could you tell me more about what you need in the NDA?</div>
          </div>
          <div className="chat-message bg-gray-100 rounded-lg px-4 py-3 mb-2 max-w-[80%]">
            <div className="message-label text-xs font-semibold text-purple-700 mb-1">Fi Assistant</div>
            <div>I've generated an NDA based on our conversation. You can preview it by clicking the 'Preview Document' button in the sidebar to customize it further.</div>
          </div>
        </div>

        <div className="quick-actions flex gap-2 mb-3 flex-wrap">
          <button className="quick-action-btn px-4 py-2 border-2 border-purple-700 text-purple-700 rounded-full text-sm font-semibold">NDA</button>
          <button className="quick-action-btn px-4 py-2 border-2 border-purple-700 text-purple-700 rounded-full text-sm font-semibold">MUTUAL NDA</button>
        </div>

        <div className="chat-input-container flex items-center gap-3">
          <div className="fi-assistant flex items-center gap-2 text-purple-700 font-semibold">
            <span>🤖</span>
            <span>Fi Assistant - Legal document drafting</span>
          </div>
          <input className="flex-1 text-input bg-white border-2 border-gray-200 rounded-md px-5 py-3" placeholder="Wow, great work..." />
          <button className="send-button bg-purple-700 text-white px-5 py-3 rounded font-semibold">➤</button>
        </div>

        <p className="text-center text-gray-400 text-xs mt-2">💡 Need help? Ask Fi Assistant on the left</p>
      </div>

      <div className="note mt-6 bg-amber-100 border-l-4 border-amber-500 p-4 rounded">
        <strong>Editor Features:</strong>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
          <li>Full-featured rich text editor with formatting toolbar</li>
          <li>Export options (DOCX, PDF)</li>
          <li>Integrated AI chat assistant for real-time document modifications</li>
          <li>Contextual help sidebar with numbered tips</li>
          <li>Quick action buttons for common document types</li>
          <li>Highlighted placeholders for customization</li>
        </ul>
      </div>
    </main>
  )
}
