class ApplicationController < ActionController::API
  include ActionController::Cookies

  SESSION_KEY = '_uni_channel_session_id'

  before_action :set_session

  def set_session
    @session_id = cookies[SESSION_KEY]
    unless @session_id
      @session_id = SecureRandom.hex(64)
    end
    # セッションIDの期間の更新
    cookies[SESSION_KEY] = {
      value: @session_id,
      expires: 1.month.from_now
    }
  end
end
