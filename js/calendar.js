    const MONTHS = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    let current = new Date();
    current.setDate(1)
    function renderCalendar() {
      const year = current.getFullYear();
      const month = current.getMonth();
      document.getElementById('month-title').textContent = MONTHS[month] + ' ' + year;
      const firstDay = new Date(year, month, 1).getDay();
      const totalDays = new Date(year, month + 1, 0).getDate();
      const today = new Date();
      let html = '';
      for (let i = 0; i < firstDay; i++) {
        html += `<div class="cal-cell empty"></div>`;
      }
      for (let day = 1; day <= totalDays; day++) {
        const isToday = (
          today.getFullYear() === year &&
          today.getMonth() === month &&
          today.getDate() === day
        );
        html += `<div class="cal-cell ${isToday ? 'today' : ''}">${day}</div>`;
      }
      document.getElementById('cal-days').innerHTML = html;
    }
      document.getElementById('prev-btn').addEventListener('click', function() {
      current.setMonth(current.getMonth() -1);
      renderCalendar();
    });
      document.getElementById('next-btn').addEventListener('click', function() {
      current.setMonth(current.getMonth() +1);
      renderCalendar();
      });
      renderCalendar();