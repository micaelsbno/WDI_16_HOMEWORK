require "pry"
words = ["hello", "what", "is", "up", "dude"]

def lengths(array)
  array.map { |str|
    str.length
  }
end

def transmogrifier(num1, num2, num3)
  (num1 * num2)**num3
end

def toonify (accent, sentence)
  if accent ==  "daffy"
    sentence.downcase.gsub(/[s]/, "th")
  elsif accent == "elmer"
    sentence.downcase.gsub(/[r]/, "w")
  else
    sentence
  end
end

def word_reverse (phrase)
  phrase.split(" ").reverse.join(' ')
end

def letter_reverse(phrase)
  phrase.reverse.split.reverse.join(' ')
end

def longest (words)
  words.max_by{|w| w.length}
end
binding.pry