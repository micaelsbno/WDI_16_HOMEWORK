require 'pry'
class Robot
  def initialize
    @mac_address = 6.times.map { 
      rand(0..255).to_s(16  }.map {
        |number| if number.length < 2
          return (0 + number.to_s)
        else
          return number
        end }.join('.')
    @counter = -1
    self.reset
    @creation_time = Time.new
  end

  def reset
    puts 'Resetting to factory settings.'
    @name = "#{('A'..'Z').to_a.sample + ('A'..'Z').to_a.sample + rand(9).to_s + rand(9).to_s + rand(9).to_s}"
    @counter = @counter + 1
    @reset_time = Time.new
  end 

  def name
    @counter = @counter + 1
    @name
  end

  def instruction_count
    @counter
    @counter = @counter + 1
    @counter - 1
  end

  def timers
    binding.pry
    puts "#{(Time.now.sec - @reset_time.sec)} since last reboot. #{(Time.now.sec - @creation_time.sec)} seconds since creation" 
  end
  
end

binding.pry