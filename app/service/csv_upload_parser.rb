require 'csv'
class CsvUploadParser
  class <<self
    def parse_and_save(content)
      yield CSV.parse(content, headers: true).to_a if block_given?
    end
  end
end
