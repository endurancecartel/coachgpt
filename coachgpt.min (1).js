
(function() {
  const chatBtn = document.createElement('div');
  chatBtn.innerText = '💬 CoachGPT';
  chatBtn.style.position = 'fixed';
  chatBtn.style.bottom = '20px';
  chatBtn.style.right = '20px';
  chatBtn.style.background = '#F26A4B';
  chatBtn.style.color = '#fff';
  chatBtn.style.padding = '10px 15px';
  chatBtn.style.borderRadius = '8px';
  chatBtn.style.cursor = 'pointer';
  chatBtn.style.zIndex = '10000';
  chatBtn.style.fontFamily = 'Arial, sans-serif';
  chatBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
  chatBtn.onclick = () => alert('Hey there! I’m CoachGPT. How can I help with your training?');
  document.body.appendChild(chatBtn);
})();
