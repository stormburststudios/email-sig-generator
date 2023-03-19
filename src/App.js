import { useState, useRef } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { EmailTemplate } from './components/EmailTemplate/EmailTemplate';

function App() {
  const [image, setImage] = useState(null);
  const [forename, setForename] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [mobile, setMobile] = useState('');
  const template = useRef(null);

  const copy = () => {
    const range = document.createRange();
    range.selectNodeContents(template.current);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('copy');
    toast('Copied HTML', { type: toast.TYPE.SUCCESS });
  }

  const reset = () => {
    setImage(null);
    setForename('');
    setSurname('');
    setEmail('');
    setPosition('');
    setLinkedIn('');
    setMobile('');
  }

  return (
      <div style={{padding: '50px 100px 100px 100px', backgroundColor: '#EFF3F9' }}>
        <ToastContainer />
        <div className="mt-5 md:col-span-2 md:mt-0" style={{ marginBottom: '30px' }}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <p className="text-lg font-bold" style={{ margin: 0 }}>Preview</p>
              <div ref={template}>
                <EmailTemplate
                    picture={image}
                    forename={forename}
                    surname={surname}
                    email={email}
                    position={position}
                    linkedIn={linkedIn}
                    mobile={mobile}
                />
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <a href="https://www.loom.com/share/586c20b4d4084787861356246ff1ff52" target="_blank" style={{ textDecoration: 'none' }}>
                <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent text-black bg-slate-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-500 focus:outline-none focus:ring-2 focus:bg-slate-400 focus:ring-offset-2"
                    style={{ marginRight: '10px' }}
                >
                  Learn How To Set In Gmail
                </button>
              </a>
              <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={copy}
              >
                Copy HTML
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    Image URL
                  </label>
                  <input
                      type="text"
                      name="url"
                      id="first-name"
                      autoComplete="given-name"
                      className="field mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="https://ca.slack-edge.com/T3A03KQ6S-UK21Z3L2X-48206164cf0e-512"
                      value={image}
                      onChange={({target}) => setImage(target.value)}
                  />
                  <a className="help" href="https://www.loom.com/share/0af2cce327854f9aaf9413562afcc747" target="_blank">Learn how to get your image URL</a>
                  <a className="help" href="https://imgur.com" target="_blank">Go to imgur.com</a>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="field mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="John"
                      value={forename}
                      onChange={({target}) => setForename(target.value)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="field mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Doe"
                      value={surname}
                      onChange={({target}) => setSurname(target.value)}
                  />
                </div>

                <div className="col-span-3">
                  <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                    Position
                  </label>
                  <input
                      type="text"
                      name="position"
                      id="position"
                      className="field mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Head of Doe"
                      value={position}
                      onChange={({target}) => setPosition(target.value)}
                  />
                </div>

                <div className="col-span-3">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="field mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="john.doe@oneupsales.co.uk"
                      value={email}
                      onChange={({target}) => setEmail(target.value)}
                  />
                </div>


                <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    LinkedIn URL
                  </label>
                  <input
                      type="text"
                      name="ln"
                      id="ln"
                      className="field mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="https://www.linkedin.com/in/johndoe"
                      value={linkedIn}
                      onChange={({target}) => setLinkedIn(target.value)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                  <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                        <span style={{backgroundColor: '#e5e5e5' }} className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                          +44
                        </span>
                    <input
                        type="number"
                        name="mobile"
                        id="mobile"
                        className="field block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="3308 08 3310"
                        autoComplete="tel-local"
                        value={mobile}
                        onChange={({target}) => setMobile(target.value)}
                    />
                  </div>
                  <p className="font-medium text-gray-500 text-sm" style={{ fontStyle: 'italic' }}>Leave this empty to use the company number</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  onClick={reset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
