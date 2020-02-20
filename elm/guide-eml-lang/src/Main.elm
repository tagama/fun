module Main exposing (..)

-- Press buttons to increment and decrement a counter.
--
-- Read how it works:
--   https://guide.elm-lang.org/architecture/buttons.html
import Browser
import Html exposing (Html, button, div, input, text)
import Html.Attributes exposing (placeholder, value)
import Html.Events exposing (onClick, onInput)


-- MAIN
main = Browser.sandbox { init = init, update = update, view = view }


-- MODEL
type alias Model = {
    count : Int,
    rate : Maybe Int
    }


init : Model
init = { count = 1, rate = Nothing}


-- UPDATE
type Msg = Increment | Decrement | Rate String


update : Msg -> Model -> Model
update msg model =
  case msg of
    Increment -> { model | count = model.count + model.rate }

    Decrement -> { model | count = model.count - model.rate }

    Rate rate -> case String.toInt rate of
           Just int -> { model | rate = Just int}
           Nothing -> {model | rate = Nothing}




-- VIEW
view : Model -> Html Msg
view model =
  div []
    [
      input [ placeholder  "", value  model.rate, onInput Rate  ][]
    , button [ onClick Decrement ] [ text "-" ]
    , div [] [ text (String.fromInt model.count) ]
    , button [ onClick Increment ] [ text "+" ]
    ]
