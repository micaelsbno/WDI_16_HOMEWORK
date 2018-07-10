print 'Choose your file: '
filename = gets.chomp
puts "#{File.readlines(filename).length} line(s)"