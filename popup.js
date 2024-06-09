document.addEventListener('DOMContentLoaded', function() {
  const colorButtons = document.querySelectorAll('#colorDropdown button');
  const filterCheckboxes = document.querySelectorAll('#filterDropdown input[type="checkbox"]');

  function setSelectedColor(color) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'changeColor', color: color }, function(response) {
          if (chrome.runtime.lastError) {
            // console.error(chrome.runtime.lastError.message);
          } else {
            // console.log('Color changed to:', color);
            document.getElementById('colorDropdown').classList.remove('show');
          }
        });
      } else {
        // console.error('No active tab found.');
      }
    });
  }

  function updateButtonStyles(selectedButton) {
    colorButtons.forEach(button => {
      if (button === selectedButton) {
        button.style.border = '2px solid black';
      } else {
        button.style.border = 'none';
      }
    });
  }

  function toggleDropdown(dropdownId) {
    document.getElementById(dropdownId).classList.toggle('show');
  }

  document.getElementById('selectColor').addEventListener('click', function() {
    toggleDropdown('colorDropdown');
  });

  document.getElementById('selectFilter').addEventListener('click', function() {
    toggleDropdown('filterDropdown');
  });

  colorButtons.forEach(button => {
    button.addEventListener('click', function() {
      setSelectedColor(button.id);
      updateButtonStyles(button);
    });
  });

  document.getElementById('clear').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'clearHighlights' }, function(response) {
          if (chrome.runtime.lastError) {
            // console.error(chrome.runtime.lastError.message);
          } else {
            // console.log('Highlights cleared.');
          }
        });
      } else {
        // console.error('No active tab found.');
      }
    });
  });

  document.getElementById('exportPDF').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'exportToPDF' }, function(response) {
          if (chrome.runtime.lastError) {
            // console.error(chrome.runtime.lastError.message);
          } else {
            // console.log('Highlights exported to PDF.');
          }
        });
      } else {
        // console.error('No active tab found.');
      }
    });
  });

  document.getElementById('apply-filter').addEventListener('click', function() {
    let selectedColors = [];
    filterCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedColors.push(checkbox.value);
      }
    });
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'applyFilter', colors: selectedColors }, function(response) {
          if (chrome.runtime.lastError) {
            // console.error(chrome.runtime.lastError.message);
          } else {
            // console.log('Filter applied with colors:', selectedColors);
            document.getElementById('filterDropdown').classList.remove('show');
          }
        });
      } else {
        // console.error('No active tab found.');
      }
    });
  });

  document.getElementById('clear-filter').addEventListener('click', function() {
    filterCheckboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'clearFilter' }, function(response) {
          if (chrome.runtime.lastError) {
            // console.error(chrome.runtime.lastError.message);
          } else {
            // console.log('Filter cleared.');
            document.getElementById('filterDropdown').classList.remove('show');
          }
        });
      } else {
        // console.error('No active tab found.');
      }
    });
  });

  window.onclick = function(event) {
    if (!event.target.matches('#selectColor') && !event.target.matches('#selectFilter') && !event.target.matches('.dropdown-content') && !event.target.matches('input')) {
      const dropdowns = document.getElementsByClassName('dropdown-content');
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  chrome.storage.local.get('currentColor', function(data) {
    if (data.currentColor) {
      const button = document.getElementById(data.currentColor);
      if (button) {
        updateButtonStyles(button);
      }
    }
  });
});
