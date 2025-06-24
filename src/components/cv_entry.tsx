import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface CvEntryProps {
    employer: string;
    position: string;
    timePeriod: string;
    description: string;
    keyAchievements?: string[]; // changed from string to string[]
}

const CvEntry: React.FC<CvEntryProps> = ({
    employer,
    position,
    timePeriod,
    description,
    keyAchievements,
}) => (
    <Card variant="outlined" sx={{ mb: 2, width: '100%' }}>
        <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="baseline">
                <Typography variant="h5" component="span">
                    {employer}
                </Typography>
                <Typography variant="body2" color="text.secondary" component="span">
                    {timePeriod}
                </Typography>
            </Box>
            <Typography variant="h5" color="text.secondary">
                {position}
            </Typography>
            <Typography variant="body1">
                {description}
            </Typography>
            { keyAchievements && keyAchievements.length > 0 && (
            <>
                <Typography variant="h6" color="text.secondary">Key achievements</Typography>
                {keyAchievements.map((achievement, idx) => (
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{ mb: 1 }}
                        key={idx}
                    >
                        {achievement}
                    </Typography>
                ))}
            </>
            )}
        </CardContent>
    </Card>
);

export default CvEntry;