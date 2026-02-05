// script.js - Notification functionality
document.addEventListener('DOMContentLoaded', function() {
    const completeBtn = document.getElementById('completeBtn');
    const notificationDiv = document.getElementById('notification');
    
    if (completeBtn) {
        completeBtn.addEventListener('click', function() {
            // Show browser alert
            alert("Task completed! Notification sent.");
            
            // Also update the notification div
            notificationDiv.innerHTML = `
                <strong>This page says</strong><br>
                Task completed! Notification sent.
                <button onclick="this.parentElement.style.display='none'" 
                        style="margin-top:10px; padding:5px 15px; background:#4CAF50; color:white; border:none; border-radius:4px; cursor:pointer;">
                    OK
                </button>
            `;
            notificationDiv.style.display = 'block';
            
            // Update task status visually
            const pendingTask = document.querySelector('.status.pending');
            const pendingLabel = document.querySelector('.label-pending');
            
            if (pendingTask && pendingLabel) {
                pendingTask.classList.remove('pending');
                pendingTask.classList.add('done');
                pendingLabel.classList.remove('label-pending');
                pendingLabel.classList.add('label-done');
                pendingLabel.textContent = 'DONE';
                
                // Update task text
                const taskText = document.querySelector('.task:nth-child(3) .task-text');
                if (taskText) {
                    taskText.textContent = 'Task 3: Add notifications [COMPLETED]';
                }
            }
            
            console.log("Notification system initialized");
        });
    }
});