// Task Manager Notification System
document.addEventListener('DOMContentLoaded', function() {
    const completeBtn = document.getElementById('complete-btn');
    const notification = document.getElementById('notification-message');
    
    if (completeBtn) {
        completeBtn.addEventListener('click', function() {
            // Show browser alert
            alert("Task completed! Notification sent.");
            
            // Also show on-page notification
            if (notification) {
                notification.style.display = 'block';
                notification.style.backgroundColor = '#d4edda';
                notification.style.color = '#155724';
                notification.style.padding = '15px';
                notification.style.borderRadius = '5px';
                notification.style.marginTop = '20px';
            }
            
            // Update task list
            const taskList = document.getElementById('task-list');
            if (taskList) {
                taskList.innerHTML = taskList.innerHTML.replace(
                    '🔲 Task 3: Add notification system',
                    '✅ Task 3: Add notification system - COMPLETE'
                );
            }
        });
    }
});
