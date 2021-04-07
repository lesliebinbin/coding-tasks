class PeopleController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    if order_field.empty?
      render json: Person.all
    else
      render json: Person.order_by(order_field)
    end
  end

  def upload
    CsvUploadParser.parse_and_save(upload_file_field) do |content|
      if Person.create(content)
        head :ok
      else
        head :not_acceptable
      end
    end
  end

  private

  def order_field
    params.permit(:display_order)
  end

  def upload_file_field
    params.require(:upload_file)
  end
end
