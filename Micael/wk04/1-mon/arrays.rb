

days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
days_of_the_week.unshift(days_of_the_week.pop)


new_days_of_the_week = []

new_days_of_the_week.push(days_of_the_week.slice(1, 5))
new_days_of_the_week.push([days_of_the_week[6]])
new_days_of_the_week[1].push(days_of_the_week[0])
new_days_of_the_week.pop

days_on_order = new_days_of_the_week[0].sort
