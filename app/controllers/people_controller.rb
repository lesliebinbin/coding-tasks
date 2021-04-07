class PeopleController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: { total_count: Person.count,
                   data: Person.order_by_created_at.ransack(name_cont: params[:search]).result.page(params[:page]) }
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

  def upload_file_field
    params.require(:upload_file)
  end
end
