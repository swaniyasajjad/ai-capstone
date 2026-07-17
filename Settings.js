const form = document.getElementById('settingsForm');
const textSize = document.getElementById('textSize');
const textSizeOutput = document.getElementById('textSizeOutput');
const cancelBtn = document.getElementById('cancelBtn');
const statusMessage = document.getElementById('statusMessage');

// Live-update the text size label as the slider moves
textSize.addEventListener('input', () => {
  textSizeOutput.textContent = `${textSize.value}px`;
});

// Handle save
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const settings = {
    displayName: data.get('displayName'),
    email: data.get('email'),
    timezone: data.get('timezone'),
    emailUpdates: data.get('emailUpdates') === 'on',
    pushNotifications: data.get('pushNotifications') === 'on',
    weeklySummary: data.get('weeklySummary') === 'on',
    theme: data.get('theme'),
    textSize: data.get('textSize'),
    profilePublic: data.get('profilePublic') === 'on',
  };

  // Replace this with a real API call, e.g.:
  // fetch('/api/settings', { method: 'POST', body: JSON.stringify(settings) })
  console.log('Saving settings:', settings);

  statusMessage.textContent = 'Settings saved.';
  setTimeout(() => (statusMessage.textContent = ''), 2500);
});

// Handle cancel: reset form to its last saved state
cancelBtn.addEventListener('click', () => {
  form.reset();
  textSizeOutput.textContent = `${textSize.value}px`;
  statusMessage.textContent = 'Changes discarded.';
  setTimeout(() => (statusMessage.textContent = ''), 2500);
});