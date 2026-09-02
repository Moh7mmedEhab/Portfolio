import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { getDynamicAge } from '../utils/age';

const TerminalWidget = () => {
  const age = getDynamicAge();

  const [history, setHistory] = useState([
    { type: 'input', text: 'whoami' },
    { type: 'output', color: 'text-primary-accent', text: `> Mohammed Ehab: ${age.formatted} Full-Stack Developer & Chess Master (2125 Peak Elo)` },
    { type: 'input', text: 'cat background.txt' },
    { type: 'output', color: 'text-muted-custom', text: '> 4 Years of Learning | 3 Years at WE School for Applied Technology' },
    { type: 'input', text: 'echo $PHILOSOPHY' },
    { type: 'output', color: 'text-amber', text: '> "Calculated moves in architecture, clean execution in code."' }
  ]);

  const [inputVal, setInputVal] = useState('');

  const executeCommand = (cmdText) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    let newEntries = [{ type: 'input', text: cmdText }];

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (cleanCmd === 'whoami') {
      newEntries.push({
        type: 'output',
        color: 'text-primary-accent',
        text: `> Mohammed Ehab (${age.formatted}): Full-Stack Web Developer (PHP/Laravel, Node, React, TypeScript, Python, C++)`
      });
    } else if (cleanCmd.includes('chess') || cleanCmd.includes('elo') || cleanCmd.includes('rank')) {
      newEntries.push({
        type: 'output',
        color: 'text-amber',
        text: '> Peak Rating: 2125 Elo | Tactical calculation & positional strategy applied to software systems'
      });
    } else if (cleanCmd.includes('tech') || cleanCmd.includes('skills')) {
      newEntries.push({
        type: 'output',
        color: 'text-green',
        text: '> Tech: HTML, CSS, JS, TS, Bootstrap, React, PHP, NodeJS, Express, Laravel, MySQL, Git, CPP, Python, Hosting'
      });
    } else if (cleanCmd.includes('contact') || cleanCmd.includes('phone') || cleanCmd.includes('email')) {
      newEntries.push({
        type: 'output',
        color: 'text-primary-accent',
        text: '> Phone & WhatsApp: +201062089220 | Email: pro.mohammedehab@gmail.com'
      });
    } else if (cleanCmd.includes('education') || cleanCmd.includes('school')) {
      newEntries.push({
        type: 'output',
        color: 'text-muted-custom',
        text: '> 3 Years at WE School for Applied Technology (Full-Stack Web Development specialization)'
      });
    } else if (cleanCmd === 'help') {
      newEntries.push({
        type: 'output',
        color: 'text-primary-accent',
        text: '> Available commands: whoami, chess, skills, education, contact, clear'
      });
    } else {
      newEntries.push({
        type: 'output',
        color: 'text-dim',
        text: `> bash: ${cleanCmd}: command not recognized. Type "help" for available commands.`
      });
    }

    setHistory((prev) => [...prev, ...newEntries]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputVal.trim() !== '') {
      executeCommand(inputVal);
    }
  };

  return (
    <div className="terminal-shell">
      {/* Terminal Title Bar */}
      <div className="terminal-header">
        <div className="d-flex align-items-center gap-2">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
          <span className="ms-2 font-mono text-dim" style={{ fontSize: '0.75rem' }}>
            ehab@archlinux: ~
          </span>
        </div>
        <button 
          onClick={() => setHistory([])} 
          className="btn p-0 text-dim" 
          title="Clear screen"
          style={{ background: 'none', border: 'none' }}
        >
          <Trash2 size={14} />
        </button>
      </div>

      {/* Terminal Log Screen */}
      <div className="terminal-body" id="terminalLogBody">
        {history.map((entry, idx) => (
          <div key={idx} className="terminal-line">
            {entry.type === 'input' ? (
              <div>
                <span className="terminal-prompt-user">ehab@linux:~$</span> {entry.text}
              </div>
            ) : (
              <div className={entry.color}>{entry.text}</div>
            )}
          </div>
        ))}

        {/* Live Input Prompt */}
        <div className="d-flex align-items-center gap-2 mt-2">
          <span className="terminal-prompt-user">ehab@linux:~$</span>
          <input
            type="text"
            className="font-mono text-white bg-transparent border-0 p-0 flex-grow-1"
            style={{ outline: 'none', fontSize: '0.82rem' }}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help' or click quick buttons..."
          />
        </div>
      </div>

      {/* Quick Action Chips */}
      <div className="terminal-quick-actions">
        <span className="font-mono text-dim" style={{ fontSize: '0.72rem' }}>Quick:</span>
        <button className="terminal-chip-btn" onClick={() => executeCommand('chess')}>./chess.sh</button>
        <button className="terminal-chip-btn" onClick={() => executeCommand('skills')}>./skills.sh</button>
        <button className="terminal-chip-btn" onClick={() => executeCommand('education')}>./education.sh</button>
        <button className="terminal-chip-btn" onClick={() => executeCommand('contact')}>./contact.sh</button>
      </div>
    </div>
  );
};

export default TerminalWidget;
