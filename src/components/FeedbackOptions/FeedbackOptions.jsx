import MarksButton from 'components/Button/Button';
import { List } from './FeedbackOptions.styles';
import { toUpperFirstLetter } from 'commonJs/commonJs';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <li key={option}>
            <MarksButton
              action={() => {
                onLeaveFeedback(option);
              }}
            >
              {toUpperFirstLetter(option)}
            </MarksButton>
          </li>
        );
      })}
    </List>
  );
};

export default FeedbackOptions;
