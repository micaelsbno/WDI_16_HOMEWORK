require 'pry'

require_relative 'animal'
require_relative 'client'

#declare shelter - array, hash, custom object
# you have permission to make the shelter a global

shelter = Hash.new
shelter.store(:clients, [])
shelter.store(:pets, [])

#cli - program

#show a menu of options
# 1- list all clients
# 2- list all animals

def create_animal
  print 'Choose animal name '
  pet_name = gets.chomp
  print 'Choose animal age '
  pet_age = gets.chomp.to_i
  print 'Choose pet gender '
  pet_gender = gets.chomp
  print 'Choose pet species '
  pet_species = gets.chomp
  print 'Add pet toys? (y/n) '
  if gets.chomp.downcase == 'y'
    print 'Add toys (separated by commas ,) '
    pet_toys = [gets.chomp.split(',')]
  end

  return animal = Animal.new(pet_name, pet_age, pet_gender, pet_species, pet_toys)
end

def create_client
  print 'Choose client name '
  client_name = gets.chomp
  print 'Choose client age '
  client_age = gets.chomp.to_i
  print "Number of client's children "
  client_children = gets.chomp
  print 'Add other pets? (y/n) '
  if gets.chomp.downcase == 'y'
    print 'Add pets (separated by commas ,)'
    client_pets = gets.chomp.split(',')
  end

  documented_pets = client_pets.map { |pet| Animal.new(pet)}

  return client = Client.new(client_name, client_children, client_age, documented_pets)
end

# animals and clients for testing
shelter[:clients] << Client.new('Johnnie', 2, 4, ['lil uzi', 'lil wayne', 'lil pump'].map { |pet| Animal.new(pet)})
shelter[:clients] << Client.new('Juan', 50, 2, ['bob', 'Bobbye', 'Bonobo'].map { |pet| Animal.new(pet)})
shelter[:pets] << Animal.new('Bullet', 12, 'male', 'chiuaua', ['ball','guns'])
shelter[:pets] << Animal.new('Arrow', 3, 'female', 'chiuaua', ['bow','sword'])
###################################


answer = ''

while answer.downcase != 'exit' do
  
  print "[1] Display all Animals || [2] Display all Clients\n"
  print "[3] Create an Animal    || [4] Create a Client\n"
  print "[5] Adopt an Animal     || [6] Put an Animal up for Adoption\n"
  answer = gets.chomp
  
  client_names = shelter[:clients].map { |client| client.get_name }
  pet_names = shelter[:pets].map { |pet| pet.get_name}
  
 
  if answer == '1'
    puts "Pets in the shelter now: "
    puts pet_names.join(', ')
    puts "\n"
  end


  if answer == '2'
    puts "Client names: "
    puts client_names.join(', ')
    puts "\n"
  end


  if answer == '3'
    shelter[:pets] << create_animal
  end


  if answer == '4'
    shelter[:clients] << create_client
  end


  if answer == '5'
    
    puts "Choose one pet from the list:"
    puts pet_names.join(', ')
    pet_chosen = gets.chomp
    while (pet_names.include? pet_chosen) == false
      puts "We can't find that pet. Try again: "
      pet_chosen = gets.chomp
    end
    
    pet_number = pet_names.index pet_chosen
    puts 'Put your account name'
    adoption_name = gets.chomp
    unless client_names.include? adoption_name
      shelter[:clients] << Client.new(adoption_name)
      client_names = shelter[:clients].map { |client| client.get_name }
    end
    client_number = client_names.index adoption_name
    shelter[:clients][client_number].add_pet(shelter[:pets][pet_number])
    shelter[:pets].delete_at(pet_number)
   
  end


  if answer == '6'
    print 'Choose client name: '
    client_dropping = gets.chomp
    
    if client_names.include? client_dropping 
      client_number = client_names.index client_dropping
      puts 'Which pet do you want to put to adoption?'
      client_pets = shelter[:clients][client_number].get_pets.map{|pet| pet.get_name}
      puts client_pets
      pet_chosen = gets.chomp
      pet_number = client_pets.index pet_chosen
      while (client_pets.include? pet_chosen) == false
        puts "We can't find that pet. Try again: "
        pet_chosen = gets.chomp
      end
      shelter[:pets] << shelter[:clients][client_number].get_pets[pet_number]
      shelter[:clients][client_number].remove_pet(pet_number)
    else
      shelter[:clients] << Client.new(client_dropping)
      create_animal
    end

  end

end

  binding.pry



