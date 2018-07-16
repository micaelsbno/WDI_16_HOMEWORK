class Client
  def initialize(client_name = 'name', children = '0', age = 0, pets = [])
    @name = client_name
    @children = children
    @age = age
    @pets = pets
  end

  def get_name
    @name
  end

  def add_pet (pet)
    @pets.push(pet)
  end

  def get_pets
    @pets
  end

  def remove_pet (pet_number)
    @pets.delete_at(pet_number)
  end

  # def name(client_name)
  #   @name = client_name
  # end

  # def children (children)
  #   @children = children
  # end

  # def age(age)
  #   @age = age
  # end

  # def add_pet(pet)
  #   @pets << pet
  # end

end