def convert_temp (temp,temp_unit)
  if temp_unit.upcase == "F"
    puts("
    fahrenheit = #{temp}
    C = #{(temp - 32) / 1.8}
    K = #{(temp + 459.67) / 1.8}
    ")
  elsif temp_unit.upcase == "C"
    puts("
    Celsius = #{temp}
    F = #{temp * 1.8 + 32}
    K = #{temp + 273.15}
    ")
  else
    x = temp + 2
    puts C
    puts("
    Kelvin = #{temp}
    C = #{temp - 273.15}
    F = #{temp * 1.8 - 459.67}
    ")
  end
end

loop do
  puts "Choose Unit (default is K)"
  unit = gets.chomp
  break if unit == "exit"
  puts "choose temperature"
  temperature = gets.chomp
  break if temperature == "exit"
  convert_temp(temperature.to_i,unit)
end