require 'csv'
class CsvUploadParser
  class <<self
    def parse_and_save(content)
      if block_given?
        csv_arr = CSV.parse(content.read, headers: true).to_a
        csv_headers = csv_arr.first
        csv_body = csv_arr.drop(1)
        csv_data = csv_body.map do |csv_line|
          csv_headers.zip(csv_line).to_h
        end
        yield csv_data
      end
    end
  end
end
