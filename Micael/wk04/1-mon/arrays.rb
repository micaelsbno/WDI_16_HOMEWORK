require 'pry'

days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
days_of_the_week.unshift(days_of_the_week.pop)



weekdays = days_of_the_week.slice(1, 5)
binding.pry